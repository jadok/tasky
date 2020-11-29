import { useRouter } from 'next/router';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import Layout from '../../components/layout';
import { graphQLClient } from '../../lib/client-graphql';
import TaskView from '../../components/task';
import { TaskEdit } from '../../components/task-edit';
import React from 'react';

const List = () => {
  const fetcher = async (query) => await graphQLClient.request(query, {});

  const query = gql`
    query lists {
      lists {
        id,
        name,
        description,
        labels,
        confidentialities
      }
    }
  `;
  const { data, error } = useSWR([query], fetcher);

  return (
    <Layout>
      <>
        <h1>Tasks</h1>

        {data ? (
          <ul className="tasks">
            <TaskEdit />
            {data.lists.map(({id, ...props}) => <TaskView key={id} {...props} />)}
          </ul>
        ) : (
          error ? <div>failed to load</div> : <div>loading...</div>
        )}
      </>
    </Layout>
  );
};

export default List;
