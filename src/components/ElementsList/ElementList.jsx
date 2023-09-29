import React from 'react';
import '../ElementsList/ElementsList-module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Operation';

export const ElementList = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className="elements">
      {contact.name} : {contact.number}
      <button className="elements-button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};
