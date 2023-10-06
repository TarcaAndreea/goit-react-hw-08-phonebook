import React, { useEffect } from 'react';
import { ElementList } from 'components/ElementsList/ElementList';
import '../ContactList/contactList-module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterContacts } from 'Redux/selectors';
import { fetchContacts } from 'Redux/Operation';

export const ContactList = () => {
  const nameExist = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className="contacts">
      {nameExist.map(contact => (
        <ElementList key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
