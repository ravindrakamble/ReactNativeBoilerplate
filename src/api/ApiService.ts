import { API } from '@utils/Constants'
import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: API.BASE_URL,
  prepareHeaders: headers => {
    headers.set('Content-Type', 'application/json')
    return headers
  },
})

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  console.log('making api call', args, api.endpoint, api.forced)
  return await baseQuery(args, api, extraOptions)
}

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'apiService',
  tagTypes: ['Api', 'User', 'Post'],
})
