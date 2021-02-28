import { Field, ObjectType, ID } from "type-graphql";
import { IsDateString, IsOptional } from 'class-validator';

@ObjectType({ description: "Task" })
export default class Task {
  @Field(() => ID)
  id: Number

  @Field()
  @IsOptional()
  date: Date;

  @Field()
  @IsOptional()
  dueDate: Date;

  @Field()
  name: String;

  @Field()
  @IsOptional()
  description: String;

  @Field(type => [String])
  @IsOptional()
  labels: String[];

  @Field(type => [String])
  @IsOptional()
  confidentialities: String[];
}
