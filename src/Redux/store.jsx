import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './ContactSlice';
import { filterReducer } from './FilterSlice';
import { userReducer } from './UserSlice';

const store = configureStore({
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

export { store };
