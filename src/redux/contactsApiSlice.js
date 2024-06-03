import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQueryConfig';

export const contactsApi = createApi({
  reducerPath: 'Contacts',
  baseQuery: baseQuery,
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: new_contact => ({
        url: '/contacts',
        method: 'POST',
        body: new_contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
