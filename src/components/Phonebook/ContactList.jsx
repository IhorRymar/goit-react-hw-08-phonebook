import css from '../Phonebook/ContactsStyle.module.css';
import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'components/redux/contacts/contacts-selectors';
import { removeContact } from 'components/redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.maContactList}>
        {contacts.map(({ name, number, id }) => (
          <ContactsListItem key={id}>
            {name}: <span className={css.item}>{number}</span>
            <Button
              className={css.delBtn}
              variant="primary"
              type="button"
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </Button>
          </ContactsListItem>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
