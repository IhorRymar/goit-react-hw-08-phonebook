import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux/es/exports';
import { addContact } from 'components/redux/contacts/contacts-actions';
import { getContacts } from 'components/redux/contacts/contacts-selectors';

import css from '../Phonebook/ContactsStyle.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  checkCorrectInput = (name, number) => {
    const { addContact } = this.props;
    if (number && name !== '') {
      addContact({ ...this.state });
    } else if (name === '') {
      alert(`Please, enter a name'`);
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts } = this.props;
    const { name, number } = this.state;
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contact`)
      : this.checkCorrectInput(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            onChange={this.handleChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            onChange={this.handleChange}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: id => dispatch(addContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
