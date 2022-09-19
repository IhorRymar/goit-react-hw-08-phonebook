import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import Container from './Container';

import { fetchContacts } from 'components/redux/contacts/contacts-operations';

import css from '../Phonebook/ContactsStyle.module.css';

const MyContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container
        fluid="sm"
        className={css.newContactContainer}
        title="New contact"
      >
        <ContactForm />
      </Container>
      <Container
        fluid="sm"
        className={css.myContactsContainer}
        title="My contacts"
      >
        <ContactFilter />
        <ContactList />
      </Container>
    </>
  );
};

export default MyContacts;
