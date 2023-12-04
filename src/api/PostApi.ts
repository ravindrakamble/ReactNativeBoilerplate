import { api } from '@api/ApiService'
import Post from '@api/data/Post'
import { API } from '@utils/Constants'

export const postApi = api.injectEndpoints({
  endpoints: builder => ({
    posts: builder.query<Post[], void>({
      providesTags: ['Post'],
      query: () => API.POSTS,
    }),
  }),
  overrideExisting: false,
})

export const { usePostsQuery, useLazyPostsQuery } = postApi
