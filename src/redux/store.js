import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts/contactSlice';
import {contactApi} from './contacts/contactSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    [contactApi.reducePath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>[
    ...getDefaultMiddleware(),
    contactApi.middleware
  ]
});

setupListeners(store.dispatch);
// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(persistConfig, contactsReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
