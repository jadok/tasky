import { /* ArgsType, */InputType, Field } from "type-graphql";
import formatISO from 'date-fns/formatISO';
import { IsDateString, IsOptional } from 'class-validator';
import { ISO_FORMAT } from "utils/date";

const nowDate = () => formatISO(new Date())

@InputType({ description: 'Add a task' })
export class AddTaskInput {
  @Field( { defaultValue: nowDate() })
  @IsDateString()
  @IsOptional()
  date: String;

  @Field()
  name: String;

  @Field({ defaultValue: '' })
  description: String;

  @Field({ defaultValue: '' })
  dueDate: String;

  @Field({ defaultValue: 0 })
  time: Number;

  @Field(type => [String], { defaultValue: [] })
  labels: String[];

  @Field(type => [String], { defaultValue: [] })
  confidentialities: String[];
}
