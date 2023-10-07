import React from 'react';
import '../ElementsList/ElementsList-module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Operation';

export const ElementList = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.Id));
  };
  return (
    <li className="elements">
      {contact.name} : {contact.number}
      <button
        className="elements-button"
        type="submit"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};
