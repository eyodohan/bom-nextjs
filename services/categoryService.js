import config from '../config.json';
import http from './httpService';

const baseUrl = config.categoryApiUrl;

export async function getAllCategories() {
  const response = await http.get(baseUrl);
  const data = response.data;

  return data;
}
