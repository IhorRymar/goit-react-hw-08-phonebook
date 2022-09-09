import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Container from './Phonebook/Container';
import css from './Phonebook/ContactsStyle.module.css';

import {
  addContact,
  removeContact,
} from '../components/redux/contacts/contacts-slice';
import { setFilter } from '../components/redux/filter/filter-slice';
import { getFilteredContacts } from '../components/redux/contacts/contacts-selectors';
import { getFilter } from '../components/redux/filter/filter-selectors';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = payload => {
    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase())
    );
    findContact
      ? alert(`${payload.name} is already in contact`)
      : dispatch(addContact(payload));
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <Container className={css.title} title="Phonebook">
        <ContactForm onSubmit={onAddContact} />
      </Container>
      <Container className={css.title} title="Contacts">
        <input
          className={css.input}
          name="filter"
          type="text"
          placeholder="Find contact..."
          value={filter}
          onChange={onSetFilter}
        ></input>
        <ContactList contacts={contacts} removeContact={onRemoveContact} />
      </Container>
    </div>
  );
};

export default App;
