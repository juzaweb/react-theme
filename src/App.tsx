import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import { getThemeConfig } from './app/features/config/configSlice';
import { useAppDispatch } from './app/hooks';
import ErrorPage from './app/routers/error-page';
import HomePage from './app/routers/home';
import PostPage from './app/routers/post';
import { getMenu } from './app/features/menu/menuSlice';

axios.defaults.baseURL = "http://cms.local/api";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/:type",
//     element: <PostPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/:type/:slug",
//     element: <PostPage />,
//     errorElement: <ErrorPage />,
//   },
// ]);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getThemeConfig());
    dispatch(getMenu('primary'));
  }, [dispatch])

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
        <Route path="/:type" element={<PostPage />} errorElement={<ErrorPage />} />
        <Route path="/:type/:slug" element={<PostPage />} errorElement={<ErrorPage />} />
      </Routes>
  </HelmetProvider>
  );
}

export default App;
