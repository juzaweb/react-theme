import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleTemplate from "../../views/template-parts/single";
import Layout from "../components/Layout";
import { getPostBySlug, selectPost } from "../features/poster/posterSlice";
import { useAppDispatch } from "../hooks";

export default function PostPage() {
  const dispatch = useAppDispatch();
  const post = useSelector(selectPost);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getPostBySlug({type: 'posts', slug: slug}));
  }, [dispatch]);

  return <Layout>
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Helmet>

    <SingleTemplate post={post} isLoading={false} />
  </Layout>;
}