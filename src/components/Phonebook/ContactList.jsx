import css from '../Phonebook/ContactsStyle.module.css';
import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'components/redux/contacts/contacts-selectors';
import { removeContact } from 'components/redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ name, phone, id }) => (
          <ContactsListItem key={id}>
            {name}: <span className={css.item}>{phone}</span>
            <button
              type="button"
              className={css.btn}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
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
  // removeContact: PropTypes.func.isRequired,
};
