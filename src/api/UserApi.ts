import { api } from '@api/ApiService'
import User from '@api/data/User'
import { API } from '@utils/Constants'

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    listUsers: builder.query<User[], void>({
      providesTags: ['User'],
      query: () => API.USERS,
    }),
  }),
  overrideExisting: false,
})

export const { useListUsersQuery, useLazyListUsersQuery } = userApi
