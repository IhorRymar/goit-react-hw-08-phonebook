import Container from 'react-bootstrap/Container';

import MyContacts from 'components/Phonebook/MyContacts';

import css from '../pages/PagesStyles.module.css';

const MyContactsPage = () => {
  return (
    <Container fluid="sm" className={css.contactsContainer}>
      <MyContacts />
    </Container>
  );
};

export default MyContactsPage;
