import axios from 'axios';

export async function getPostComments(slug: string, type: string = 'posts') {
  try {
    const response = await axios.get(`post-type/${type}/${slug}/comments`);
    return response.data;
  } catch (error: any) {
    console.error(error);
  }
}

export async function getPostBySlug(type: string = 'posts', slug: string) {
  try {
    const response = await axios.get(`post-type/${type}/${slug}`);
   
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getPosts(type: string = 'posts', options: object = {}) {
  try {
    const response = await axios.get(`post-type/${type}`, { params: options });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMenu(location: string) {
  try {
    const response = await axios.get(`menus/${location}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}