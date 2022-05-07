import config from '../config.json';
import http from './httpService';

const baseUrl = config.postApiUrl;

export async function getAllPosts() {
  const response = await http.get(baseUrl);
  const data = response.data;

  return data;
}
