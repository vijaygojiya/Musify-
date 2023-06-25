import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiEndPoints, apiStr, baseUrl} from '../../../api/ApiConst';
import {formatHomePageData} from '../../../api/format';
// Define a new API slice using createApi
export const homeScreenApi = createApi({
  reducerPath: 'homeScreenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: builder => ({
    getHomeScreenData: builder.query({
      query: () => `${apiStr}&${apiEndPoints.homeData}`,
      transformResponse: async response => {
        // Do any data formatting here
        const formatedData = await formatHomePageData(response);
        return formatedData; // Return the formatted data
      },
    }),
  }),
});

// Export the generated hooks for use in React components
export const {useGetHomeScreenDataQuery} = homeScreenApi;
