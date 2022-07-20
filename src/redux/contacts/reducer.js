import { changeFilter } from 'redux/contacts/actions';
import { createReducer } from '@reduxjs/toolkit';

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default filter;
