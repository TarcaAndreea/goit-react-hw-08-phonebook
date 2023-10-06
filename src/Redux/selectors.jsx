import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const selectIsAuthenticated = state => state.user.isAuthenticated;

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (!contacts.length) return [];

    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      if (contact.name && typeof contact.name.name === 'string') {
        return contact.name.name.toLowerCase().includes(lowercaseFilter);
      } else {
        console.error('contact.name.name nu este un șir:', contact);
        return fals;
      }
    });
  }
);
