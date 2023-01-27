import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleTemplate from "../../views/template-parts/single";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { getPostBySlug } from "../context/DataHelper";
import { Permalink, PostType, selectConfig } from "../features/config/configSlice";
import { Post } from '../context/PostContext';

export default function PostPage() {
  const config = useSelector(selectConfig);
  const { type, slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [permalink, setPermalink] = useState<Permalink | null>(null);
  const [postTypeConfig, setPostTypeConfig] = useState<PostType | null>(null);

  useEffect(() => {
    if (type && config?.permalinks) {
      setPermalink(config?.permalinks[type]);
    }

    if (config?.post_types && permalink?.post_type) {
      setPostTypeConfig(config?.post_types[permalink.post_type]);
    }

    if (postTypeConfig && slug) {
      getPostBySlug(postTypeConfig.type, slug).then((res) => setPost(res.data));
    }
  }, [config, postTypeConfig, permalink, type, slug]);

  if (!config || !post) return <Loading />

  return <Layout>
    <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Helmet>

    <SingleTemplate post={post} config={postTypeConfig} />
  </Layout>;
}