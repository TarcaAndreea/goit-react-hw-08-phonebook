import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const selectIsAuthenticated = state => state.user.isAuthenticated;

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (!filter || typeof filter !== 'string') {
      return contacts;
    }

    const lowercaseFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      if (typeof contact.name === 'string') {
        return contact.name.toLowerCase().includes(lowercaseFilter);
      } else {
        console.error('contact.name is not a string:', contact);
        return false; // skip this contact
      }
    });
  }
);
