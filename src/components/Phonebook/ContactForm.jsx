import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contacts/contacts-operations';
import { getFilteredContacts } from 'components/redux/contacts/contacts-selectors';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useForm from 'components/shared/hooks/useForm';
import css from '../Phonebook/ContactsStyle.module.css';

const ContactForm = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const initialState = {
    name: '',
    number: '',
  };

  const onSubmit = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`Contact of ${data.name} is already exist!`);
    }
    dispatch(addContact(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit} className={css.contactForm}>
      <Form.Group className="mb-3" controlId="formContactName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={state.name}
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContactNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter number"
          value={state.number}
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
