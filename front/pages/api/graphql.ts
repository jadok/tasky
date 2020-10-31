import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import { NextApiHandler } from 'next';
import { TasksResolver } from '../../appolo/tasks/resolver';

export const config = {
  api: {
    bodyParser: false
  }
};

let handler: any;

const isProd = process.env.NODE_ENV === 'production';

const apiHandler: NextApiHandler = async (req, res) => {
  if (handler && isProd) {
    return handler(req, res)
  }

  const schema = await buildSchema({
    resolvers: [TasksResolver],
    // emitSchemaFile: true,
  });

  const apolloServer = new ApolloServer({
    schema,
  })

  handler = apolloServer.createHandler({
    path: `/api/graphql`,
  })

  return handler(req, res)
}

export default apiHandler
