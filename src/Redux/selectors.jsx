import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getErorr = state => state.contacts.error;
export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (typeof filter !== 'string') {
      return contacts;
    }

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
