import Link from 'next/link';
import Image from 'next/image'; 

const Home = () => (
  <ul>
    <Image src="/sample-logo-task.png" height={1000} width={1000} alt={"home image"} />
    <li>
      <Link href="/tasks" as="/tasks">
        <a>List of tasks</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
  </ul>
)

export default Home;
