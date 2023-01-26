import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import IndexTemplate from "../../views";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { getPosts } from "../context/DataHelper";
import { selectConfig } from "../features/config/configSlice";

export default function HomePage() {
  const config = useSelector(selectConfig);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts('posts').then((res) => setPosts(res));
  }, []);

  if (!posts) return <Loading />
  
  //return <>asdadasd</>

  return <Layout>
    <Helmet>
      <title>{config?.general?.title}</title>
      <meta name="description" content={config?.general?.description} />
    </Helmet>

    <IndexTemplate posts={posts} />
  </Layout>;
}