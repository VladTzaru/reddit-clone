import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String) // Upper case for types in graphql
  hello() {
    return 'hello world';
  }
}
