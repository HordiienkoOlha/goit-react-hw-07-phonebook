import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d53ce6d4406e52355612d9.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({

    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    filterContact: builder.query({
      query: contactsName => `/contacts/${contactsName}`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: contacts => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: contacts.name,
          number: contacts.number,
        },
      }),
      invalidatesTags: ['Contact'],
    }),

  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useFilterContactQuery,
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
