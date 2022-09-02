import { Component } from 'react';
// import { nanoid } from 'nanoid';

import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import ContactFilter from './Phonebook/ContactFilter';
import css from './Phonebook/ContactsStyle.module.css';

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   const { contacts } = this.state;

  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

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
