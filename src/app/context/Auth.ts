import axios from 'axios';

export async function login(
    email: string, 
    password: string
  ) {
    try {
      const response = await axios.post(`auth/login`, { email: email, password: password });
      return response;
    } catch (error: any) {
      console.error(error);
      return error.response;
    }
}