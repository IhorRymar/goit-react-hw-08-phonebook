import { Component } from 'react';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import ContactFilter from './Phonebook/ContactFilter';
import css from './Phonebook/ContactsStyle.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContacts = newContact => {
    const { contacts } = this.state;

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contact`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <div>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm onSubmit={this.addContacts} />
        <h3 className={css.title}>Contacts</h3>
        <ContactFilter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}

export default App;
