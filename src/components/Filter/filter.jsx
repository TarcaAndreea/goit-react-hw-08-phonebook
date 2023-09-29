import React from 'react';
import '../Filter/filter-module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'Redux/selectors';
import { filteredContacts } from 'Redux/FilterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = e => {
    dispatch(filteredContacts(e.target.value));
  };

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        className="filter-input"
        type="text"
        value={filter}
        name="filter"
        onChange={handleChange}
      />
    </label>
  );
};
