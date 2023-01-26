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
  // const config = useSelector(selectConfig);
  // const { type, slug } = useParams();
  // const [post, setPost] = useState(null);

  // if (!config?.post_types || !type) {
  //   return;
  // }

  // const permalink: any = config?.permalinks ? config?.permalinks[type] : null;
  // const postTypeConfig: any = config?.post_types[permalink?.post_type];

  // useEffect(() => {
  //   if (!postTypeConfig || !slug) {
  //     return;
  //   }

  //   getPostBySlug(postTypeConfig.type, slug).then((response) => setPost(response.data));
  // }, [postTypeConfig]);

  // if (!config || !post) return <Loading />
  
  return <Layout>
    {/* <Helmet>
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
    </Helmet>

    <SingleTemplate post={post} config={postTypeConfig} /> */}
  </Layout>;
}