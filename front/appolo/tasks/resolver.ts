import {
  Arg,
  Args,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

import { SampleArgs } from './argument';
import { AddTaskInput } from './input';

import TasksSchema from './schema/task';
import Task from './schema/task';
import { read, write } from '../../adapter/file';

@Resolver(() => TasksSchema)
export class TasksResolver {
  @Query(() => TasksSchema, { nullable: true })
  async list(
    @Arg("id") id: number
  ) {
    const source = await read('./schema/tasks.json').then((donnee) => donnee);
    return ((source as unknown) as Task[]).find((element: Task) => element.id === id);
  }

  @Query(() => [TasksSchema])
  async lists(@Args() { skip, take }: SampleArgs) {
    const source = await read('./schema/tasks.json').then((data) => data);
    return source;
  }

  @Mutation(() => [TasksSchema])
  async addTask(@Arg("input") taskInput: AddTaskInput): Promise<Task[]> {
    return await read('./schema/tasks.json')
      .then((data: Task[]) => {
        const newTask = taskInput as Task;
        newTask.id = data.length + 1;
        data.push(newTask);
        console.log({ data });
        return data;
      })
      .then(async (data) => {
        await write('./schema/tasks.json', data)
        return data;
      });

  }
}
