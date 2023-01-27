import axios from 'axios';

export function fetchThemeConfig() {
  const response = axios.get(`setting`);
  return response;
}
