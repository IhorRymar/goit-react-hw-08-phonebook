import React from 'react';
import css from '../Phonebook/ContactsStyle.module.css';
import PropTypes from 'prop-types';

function ContactList({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;
