import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsApi } from '../components/API/Api';
import { auth } from 'components/auth/firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await contactsApi.getAll();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await contactsApi.create(contact);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await contactsApi.delete(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const userData = {
        uid: response.user.uid,
        email: response.user.email,
      };

      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const userData = {
      uid: response.user.uid,
      email: response.user.email,
    };

    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
