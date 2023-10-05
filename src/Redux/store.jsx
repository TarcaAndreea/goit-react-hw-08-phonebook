import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './ContactSlice';
import { filterReducer } from './FilterSlice';
import { userReducer } from './UserSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
