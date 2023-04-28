import {apiStr} from '../../../api/ApiConst';
import {api} from '../../api';

export type User = {
  id: number;
  name: string;
};

export const homeApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: build.query<User, string>({
      query: params => `${apiStr}&${params}`,
    }),
  }),
  overrideExisting: false,
});

export const {useLazyFetchOneQuery} = homeApi;
