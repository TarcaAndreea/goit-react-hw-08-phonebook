import { createAsyncThunk } from '@reduxjs/toolkit';

import { auth } from 'components/auth/firebase';
import { dataBase } from 'components/auth/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  collection,
  getDoc,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
} from 'firebase/firestore';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const userDocRef = doc(dataBase, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const documentsContacts = await getDocs(contactsCollectionRef);

      const contactsData = [];
      documentsContacts.forEach(doc => {
        const contactData = doc.data();
        contactsData.push({ ...contactData, id: doc.id });
      });

      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const userDocRef = doc(dataBase, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const docRef = await addDoc(contactsCollectionRef, {
        nume: contact.name,
        number: contact.number,
      });
      const addedData = (await getDoc(docRef)).data();
      console.log(addedData);
      return { id: docRef.id, ...addedData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const userDocRef = doc(dataBase, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const contactsDocRef = doc(contactsCollectionRef, contactId);

      await deleteDoc(contactsDocRef);

      return contactId;
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

      return response.user;
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
