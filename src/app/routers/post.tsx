import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleTemplate from "../../views/template-parts/single";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { getPostBySlug } from "../context/DataHelper";
import { PostType, selectConfig } from "../features/config/configSlice";
import { Post } from '../context/PostContext';

export default function PostPage() {
  const config = useSelector(selectConfig);
  const { type, slug } = useParams();
  const [post, setPost] = useState<Post|null>(null);
  let postTypeConfig: PostType | null = null;

  useEffect(() => {
    if (!type) {
      return;
    }

    const permalink: any = config?.permalinks ? config?.permalinks[type] : null;
    postTypeConfig = config?.post_types ? config?.post_types[permalink?.post_type] : null;
    console.log(postTypeConfig);
    
    if (!postTypeConfig || !slug) {
      return;
    }

    getPostBySlug(postTypeConfig.type, slug).then((res) => setPost(res.data));
  }, []);

  if (!config || !post) return <Loading />
  
  return <Layout>
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Helmet>

    <SingleTemplate post={post} config={postTypeConfig} />
  </Layout>;
}