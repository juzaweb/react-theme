import axios from 'axios';
import { PosterOptions } from './posterSlice';

export function fetchPost(type: string, slug: string) {
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve({ data: axios.get(`post-type/${type}/${slug}`) }), 500)
  );
}

export function fetchPosts(type: string, options?: Array<PosterOptions>) {
  const response = axios.get(`post-type/${type}`);
  return new Promise<{ data: any }>((resolve) => resolve({ data: response }));
}
