import { User } from '../entities/User';
import { MyContext } from 'src/types';
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';

@InputType()
class UsernameAndPasswordInput {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async register(
    @Arg('options') options: UsernameAndPasswordInput,
    @Ctx() { em }: MyContext
  ) {
    const user = em.create(User, { username: options.username });
    await em.persistAndFlush(user);
  }
}
