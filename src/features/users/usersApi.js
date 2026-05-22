import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const usersApi = createApi({

  reducerPath: 'usersApi',


baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),

  tagTypes: ['Users'],

  endpoints: (builder) => ({
  
    getUsers: builder.query({
      query: () => '/users',

      providesTags: ['Users'],
    }),


    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
      
      invalidatesTags: ['Users'],
    }),


    updateUser: builder.mutation({
      query: ({ id, ...updatedUser }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: updatedUser,
      }),
      invalidatesTags: ['Users'],
    }),


    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})


export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi