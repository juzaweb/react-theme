import axios from 'axios';

export function fetchMenu(menu: string) {
  const response = axios.get(`menus/${menu}`);
  return response;
}
