import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

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

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addFilter: (contacts, { payload }) => {
      contacts.filter = payload;
    },
  },
});

export const {  addFilter } = filterSlice.actions;

export default filterSlice.reducer;
