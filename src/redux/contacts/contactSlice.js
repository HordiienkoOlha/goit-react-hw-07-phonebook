import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://611560228f38520017a38499.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `/contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contact'],
    // }),
    // createContact: builder.mutation({
    //   query: contactContent => ({
    //     url: '/contacts',
    //     method: 'POST',
    //     body: {
    //       content: todoContent,
    //     },
    //   }),
      // invalidatesTags: ['Contact'],
    // }),
  }),
});

export const {
  useFetchContactsQuery,
  // useDeleteContactMutation,
  // useCreateContactMutation,
} = contactApi;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
//   filter: '',
// };

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (contacts, { payload }) => {
//       contacts.items.push(payload);
//     },
//     deleteContact: (contacts, { payload }) => {
//       contacts.items = contacts.items.filter(item => item.id !== payload);
//     },
//     addFilter: (contacts, { payload }) => {
//       contacts.filter = payload;
//     },
//   },
// });

// export const { addContact, deleteContact, addFilter } = contactSlice.actions;

// export default contactSlice.reducer;