import { useEffect } from "react";
import { useSelector } from "react-redux";
import SingleTemplate from "../../views/template-parts/single";
import { getPostBySlug, selectPost } from "../features/poster/posterSlice";
import { useAppDispatch } from "../hooks";

export default function PostPage() {
  const dispatch = useAppDispatch();
  const post = useSelector(selectPost);
  const slug = '';

  useEffect(() => {
    dispatch(getPostBySlug({type: 'posts', slug: slug}));
  }, [dispatch]);

  return <SingleTemplate post={post} isLoading={false} />;
}