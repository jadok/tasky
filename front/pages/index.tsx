import Link from 'next/link'

const Home = () => (
  <ul>
    <li>
      <Link href="/task" as="/task">
        <a>task</a>
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
