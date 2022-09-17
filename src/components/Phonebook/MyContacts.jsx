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
    <div className={css.myContactsContainer}>
      <Container className={css.title} title="New contact">
        <ContactForm />
      </Container>

      <Container className={css.title} title="My contacts">
        <ContactFilter />
        <ContactList />
      </Container>
    </div>
  );
};

export default MyContacts;
