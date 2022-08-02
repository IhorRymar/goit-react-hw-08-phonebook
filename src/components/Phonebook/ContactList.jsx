import React from 'react';
import css from '../Phonebook/ContactsStyle.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ children, contacts, onDeleteContact }) => (
  <>
    {children}
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.item}>
          {name}: <span className={css.item}>{number}</span>
          <button
            type="button"
            className={css.btn}
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  children: PropTypes.object.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
