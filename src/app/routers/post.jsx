import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingTemplate from "../../views/components/Loading";
import SingleTemplate from "../../views/template-parts/single";
import Layout from "../components/Layout";
import { selectConfig } from "../features/config/configSlice";
import { getPostBySlug, selectPost } from "../features/poster/posterSlice";
import { useAppDispatch } from "../hooks";

export default function PostPage() {
  const dispatch = useAppDispatch();
  const config = useSelector(selectConfig);
  const post = useSelector(selectPost);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getPostBySlug({type: 'posts', slug: slug}));
  }, [dispatch]);

  if (!post) return <LoadingTemplate />

  const postTypeConfig = config?.post_types[post?.type];

  return <Layout>
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Helmet>

    <SingleTemplate post={post} config={postTypeConfig} />
  </Layout>;
}