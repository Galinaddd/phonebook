import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQueryConfig';

export const authApi = createApi({
  reducerPath: 'Auth',
  baseQuery: baseQuery,
  tagTypes: ['Auth'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: user => ({
        url: `users/signup`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),

    loginUser: builder.mutation({
      query: login => ({
        url: 'users/login',
        method: 'POST',
        body: login,
      }),
      invalidatesTags: ['Auth'],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    currentUser: builder.query({
      query: () => ({
        url: 'users/current',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCurrentUserQuery,
  useLogoutUserMutation,
} = authApi;
