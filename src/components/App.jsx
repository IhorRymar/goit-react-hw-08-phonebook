import { Component } from 'react';

import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import ContactFilter from './Phonebook/ContactFilter';
import css from './Phonebook/ContactsStyle.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />
        <h3 className={css.title}>Contacts</h3>
        <ContactFilter />
        <ContactList />
      </div>
    );
  }
}

export default App;
