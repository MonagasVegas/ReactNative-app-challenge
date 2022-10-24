import {API_HOST} from '../constants';

export async function getProducts() {
  const url = API_HOST;
  const response = await fetch(url, {
    method: 'GET',
  });
  const result = response.json();
  return result;
}
