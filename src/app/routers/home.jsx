import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPosts, selectAllPosts } from "../features/poster/posterSlice";
import { useAppDispatch } from "../hooks";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getPosts({type: 'posts'}));
  }, [dispatch])

  console.log(posts);

  return (
    <div id="error-page">
      
    </div>
  );
}