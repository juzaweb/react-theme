import axios from 'axios';

export function fetchThemeConfig() {
  const response = axios.get(`theme/setting`);
  return response;
}

export function fetchMenu(menu: string) {
  const response = axios.get(`menus/${menu}`);
  return response;
}
