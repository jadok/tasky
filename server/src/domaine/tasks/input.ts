import { /* ArgsType, */InputType, Field } from "type-graphql";
import { IsDateString, IsOptional } from 'class-validator';

// import Task from './schema/task';
/* { description: 'Add a task' }*/
@InputType()
export class AddTaskInput {
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
