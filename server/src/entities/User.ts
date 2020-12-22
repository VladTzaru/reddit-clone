import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int) // @Field exposes the field to GraphQL schema. In other words, the field won't be accessible anymore.
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: 'text', unique: true })
  username!: string;

  @Property({ type: 'text' }) // Password is not exposed to the GraphQL schema
  password!: string;
}
