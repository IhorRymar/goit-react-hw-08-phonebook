import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/contacts-operations';
import { getFilteredContacts } from 'components/redux/contacts/contacts-selectors';
import { nanoid } from '@reduxjs/toolkit';

import css from '../Phonebook/ContactsStyle.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onSubmit = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`Contact of ${data.name} is already exist!`);
    }
    dispatch(addContact(data));
  };

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    evt.currentTarget.name === 'name' ? setName(value) : setPhone(value);
  };

  const newContact = (name, phone) => {
    return {
      id: nanoid(),
      name,
      phone,
    };
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contact = newContact(name, phone);
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          onChange={handleChange}
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
          onChange={handleChange}
          name="number"
          value={phone}
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
};

export default ContactForm;
