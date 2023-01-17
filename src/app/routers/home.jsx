import { useEffect } from "react";
import { useSelector } from "react-redux";
import IndexTemplate from "../../views";
import Layout from "../components/Layout";
import { getPosts, selectAllPosts } from "../features/poster/posterSlice";
import { useAppDispatch } from "../hooks";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getPosts({type: 'posts'}));
  }, [dispatch])

  return <Layout>
    <IndexTemplate posts={posts} />
  </Layout>;
}