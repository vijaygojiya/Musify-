import axios, {AxiosPromise} from 'axios';
import {apiStr, baseUrl} from './ApiConst';

export const getResponse = async <T>(params: string): AxiosPromise<T> => {
  const url = `${baseUrl}${apiStr}&${params}`;
  const config = {
    method: 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios<T>(config);
};
