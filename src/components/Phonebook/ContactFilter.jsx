import React from 'react';
import PropTypes from 'prop-types';
import css from '../Phonebook/ContactsStyle.module.css';

function ContactFilter({ filter, onChange }) {
  return (
    <div className={css.form}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
}

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ContactFilter;
