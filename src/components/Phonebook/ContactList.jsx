import React from 'react';
import { connect } from 'react-redux/es/exports';
import { removeContact } from 'components/redux/contacts/contacts-actions';
import css from '../Phonebook/ContactsStyle.module.css';
import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id}>
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
        </ContactsListItem>
      ))}
    </ul>
  </>
);

const getVisibleContact = (contacts, filter) => {
  const normalizedfilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedfilter)
  );
};

const mapStateToProps = ({ contacts, filter }) => ({
  contacts: getVisibleContact(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
