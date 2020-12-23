import 'reflect-metadata';
import dotenv from 'dotenv';
import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import redis from 'redis';
import session from 'express-session';
import connectRedix from 'connect-redis';

// Resolvers
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import { MyContext } from './types';

const main = async () => {
  dotenv.config();

  const orm = await MikroORM.init(microConfig);
  orm.getMigrator().up(); // Auto run migrations

  const app = express();

  const RedisStore = connectRedix(session);
  const redisClient = redis.createClient();
  app.use(
    // Runs before apollo middleware because we need to have the session first
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax', // csrf
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET ? process.env.COOKIE_SECRET : [],
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }), // Exposes orm object to our resolvers
  });

  apolloServer.applyMiddleware({ app });

  app.listen(5000, () => {
    console.log('Server started on localhost:5000');
  });
};

main().catch((err) => console.log(err));
