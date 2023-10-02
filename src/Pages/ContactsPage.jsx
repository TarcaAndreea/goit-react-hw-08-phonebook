import React from 'react';
import { ContactForm } from 'components/Contactform/contactForm';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/ContactList/contactList';
export default function ContactsPage() {
  return (
    <div>
      <h1 style={{ paddingLeft: '30px', fontSize: '40px' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ paddingLeft: '30px', fontSize: '40px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
