import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {contactApi, filterSlice} from './contacts/contactSlice';


export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>[
    ...getDefaultMiddleware(),
    contactApi.middleware
  ]
});

setupListeners(store.dispatch);

