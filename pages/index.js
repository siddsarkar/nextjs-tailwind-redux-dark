import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Examples from "../components/examples";
import Layout from "../components/layout";
import { startClock } from "../store/actions/timerActions";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <Layout>
      <div className='root'>
        <Examples />
        <Link href='/show-redux-state'>
          <a>Click to see current Redux State</a>
        </Link>
      </div>
      <style jsx>
        {`
          .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
