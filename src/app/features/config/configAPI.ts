import axios from 'axios';

export function fetchThemeConfig() {
  const response = axios.get(`theme/config`);
  return response;
}
