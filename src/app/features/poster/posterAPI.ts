import axios from 'axios';
import { PosterOptions } from './posterSlice';

export function fetchPost(type: string, slug: string) {
  const response = axios.get(`post-type/${type}/${slug}`);
  return response;
}

export function fetchPosts(type: string, options?: Array<PosterOptions>) {
  const response = axios.get(`post-type/${type}`, { params: options });
  return response;
}
