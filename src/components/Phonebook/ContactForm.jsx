import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import css from '../Phonebook/ContactsStyle.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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
