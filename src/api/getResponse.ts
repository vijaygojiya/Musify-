import axios from 'axios';
import { apiStr, baseUrl } from './ApiConst';

export async function getResponse(params: any, usev4 = true) {
  let url;
  if (!usev4) {
    url = new URL(`${apiStr}&${params}`.replace(/&api_version=4/, ''), `https://${baseUrl}`);
  } else {
    url = new URL(`${apiStr}&${params}`, `https://${baseUrl}`);
  }
  const config = {
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(config);
}
