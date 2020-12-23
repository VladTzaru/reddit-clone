import { User } from '../entities/User';
import argon2 from 'argon2';
import { MyContext } from '../types';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { EntityManager } from '@mikro-orm/postgresql';

@InputType()
class UsernameAndPasswordInput {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext) {
    // Not logged in
    if (!req.session.userId) {
      return null;
    }

    const user = await em.findOne(User, { id: req.session.userId });
    return user;
  }

  // Register user
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UsernameAndPasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: 'username',
            message: 'Length must be greater than 2',
          },
        ],
      };
    }

    if (options.password.length < 6) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Length must be at least 6 characters',
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(options.password);
    let user;
    // const user = em.create(User, {
    //   username: options.username,
    //   password: hashedPassword,
    // });

    try {
      // await em.persistAndFlush(user); // Below is the identical way using QueryBuilder
      // Cast em
      const result = await (em as EntityManager)
        .createQueryBuilder(User)
        .getKnexQuery()
        .insert({
          username: options.username,
          password: hashedPassword,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .returning('*');
      user = result[0];
    } catch (error) {
      if (error.code === '23505' || error.detail.includes('already exists')) {
        return {
          errors: [
            {
              field: 'username',
              message: 'Username already exists',
            },
          ],
        };
      }
    }

    // Store user id session
    // This will set a cookie on the user
    // Keep them logged in
    req.session.userId = user.id;

    return { user };
  }

  // Login user
  @Mutation(() => UserResponse)
  async login(
    @Arg('options') options: UsernameAndPasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: 'username',
            message: 'Invalid login credentials',
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Invalid login credentials',
          },
        ],
      };
    }

    req.session.userId = user.id;

    return {
      user,
    };
  }
}
