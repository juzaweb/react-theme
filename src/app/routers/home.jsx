import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import IndexTemplate from "../../views";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { selectConfig } from "../features/config/configSlice";
import { getPosts, selectAllPosts } from "../features/poster/posterSlice";
import { useAppDispatch } from "../hooks";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const config = useSelector(selectConfig);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getPosts({type: 'posts'}));
  }, [dispatch]);

  if (!posts) return <Loading />

  return <Layout>
    <Helmet>
      <title>{config.general?.title}</title>
      <meta name="description" content={config.general?.description} />
    </Helmet>

    <IndexTemplate posts={posts} />
  </Layout>;
}