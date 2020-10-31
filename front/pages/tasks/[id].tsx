import { useRouter } from 'next/router';
import useSWR from 'swr';
import { gql } from 'graphql-request';
import Layout from '../../components/layout';
import { graphQLClient } from '../../lib/client-graphql';
import TaskView from 'components/task';

const TaskCurrent = () => {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = async (query) => await graphQLClient.request(query, { id: parseFloat(id as string) });

  const query = gql`
    query list($id: Float!) {
      list(id: $id) {
        name,
        description,
        labels,
        confidentialities
      }
    }
  `;

  const { data, error } = useSWR([query, id], fetcher);

  return (
    <Layout>
      <>
        <h1>Task</h1>

        {data ? (
          <TaskView {...data.list} />
        ) : (
          error ? <div>failed to load</div> : <div>loading...</div>
        )}
      </>
    </Layout>
  );
};

export default TaskCurrent;
