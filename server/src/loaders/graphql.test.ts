import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import { generateSchema } from './graphql';

const prepareServer = async () => {
  // creating your real schema
  const schema = await generateSchema();
  return new ApolloServer({
    schema,
  });
};

describe('graphql - task', () => {
  it('test query', async () => {
    const server = await prepareServer();
    const { query } = createTestClient(server);
  
    const result = await query({ query: `{
      lists {
        id,
        name,
        description,
        labels,
        confidentiality
        date,
        time
      }
    }` });
    expect(result.data.lists.length).toEqual(1);
    expect(result.data.lists[0]).toMatchObject({"id":"1","name":"first task","description":"# a title","date":"2020-01-09T16:13:30.340Z","labels":[],"confidentiality":[],"time":0});
  });
});
