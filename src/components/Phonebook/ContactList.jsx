import css from '../Phonebook/ContactsStyle.module.css';
import ContactsListItem from './ContactsListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => (
  <>
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem key={id}>
          {name}: <span className={css.item}>{number}</span>
          <button
            type="button"
            className={css.btn}
            onClick={() => {
              removeContact(id);
            }}
          >
            Delete
          </button>
        </ContactsListItem>
      ))}
    </ul>
  </>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
