import { Field, ObjectType, ID } from "type-graphql";
import { IsDateString, IsOptional } from 'class-validator';

@ObjectType({ description: "Task" })
export default class Task {
  @Field(() => ID)
  id: Number

  @Field()
  @IsDateString()
  date: string;


  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  @IsOptional()
  time: Number = 0;

  @Field(type => [String])
  labels: String[];

  @Field(type => [String])
  confidentiality: String[];
}
