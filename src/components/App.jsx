import { Component } from 'react';
import ContactForm from './Phonebook/ContactForm';
import ContactItem from './Phonebook/ContactItem';
import ContactList from './Phonebook/ContactList';
import ContactFilter from './Phonebook/ContactFilter';
import css from './Phonebook/ContactsStyle.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = data => {
    const { contacts } = this.state;

    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is already in contact`)
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
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
        <ContactList>
          <ContactItem
            contacts={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
