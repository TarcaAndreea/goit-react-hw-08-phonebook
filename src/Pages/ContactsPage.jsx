import React from 'react';
import { ContactForm } from 'components/Contactform/contactForm';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/ContactList/contactList';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsAuthenticated } from 'Redux/selectors';
import { useSelector } from 'react-redux';
export default function ContactsPage() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        boxShadow:
          ' rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      }}
    >
      <UserMenu />
      <h1 style={{ paddingLeft: '30px', fontSize: '40px' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ paddingLeft: '30px', fontSize: '40px' }}>Contacts</h2>
      <Filter />
      {isAuthenticated && <ContactList />}
    </div>
  );
}
