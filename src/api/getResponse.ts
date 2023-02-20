import axios from 'axios';
import { apiStr, baseUrl } from './ApiConst';

export async function getResponse(params: any) {
  const url = `https://${baseUrl}${apiStr}&${params}`;
  const config = {
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(config);
}
