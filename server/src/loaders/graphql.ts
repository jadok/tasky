import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { TasksResolver } from '../domaine/tasks/resolver';

export const generateSchema = () => buildSchema({
  resolvers: [TasksResolver],
  emitSchemaFile: true,
});

export const GraphqlLoader = async (app: Application) => {

  const schema = await generateSchema();
  const server = new ApolloServer({ schema });

  server.applyMiddleware({ app, path: '/graphql' });
}
