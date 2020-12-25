import Link from "next/link";
import { useSelector } from "react-redux";
import Layout from "../components/layout";

const codeStyle = {
  width: 400,
  padding: 10,
  border: "1px solid grey",
  marginBottom: 10,
};

const ShowReduxState = () => {
  const state = useSelector((state) => state);

  return (
    <Layout page='homepage'>
      <pre className='dark:text-white' style={codeStyle}>
        <code>{JSON.stringify(state, null, 4)}</code>
      </pre>
      <Link href='/'>
        <a>Go Back Home</a>
      </Link>
    </Layout>
  );
};

export default ShowReduxState;
