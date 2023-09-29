import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './ContactSlice';
import { filterReducer } from './FilterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});

export { store };
