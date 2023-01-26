import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleTemplate from "../../views/template-parts/single";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { getPostBySlug } from "../context/DataHelper";
import { selectConfig } from "../features/config/configSlice";

export default function PostPage() {
  const config = useSelector(selectConfig);
  const [post, setPost] = useState(null);
  const { type, slug } = useParams();

  useEffect(() => {
    getPostBySlug('posts', slug).then((response) => setPost(response.data));
  }, []);

  if (!config || !post) return <Loading />
  
  const postTypeConfig = config?.post_types[config?.permalinks[type].post_type];
  console.log(post);
  return <Layout>
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Helmet>

    <SingleTemplate post={post} config={postTypeConfig} />
  </Layout>;
}