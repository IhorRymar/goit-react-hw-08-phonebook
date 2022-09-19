import { useSelector, useDispatch } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { setFilter } from 'components/redux/filter/filter-actions';
import { getFilter } from 'components/redux/filter/filter-selectors';

import css from '../Phonebook/ContactsStyle.module.css';

const ContactFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Form className={css.filterForm}>
      <Form.Group className="mb-3" controlId="formContactName">
        <Form.Label>Contact name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Find contact"
          value={filter}
          name="filter"
          onChange={onSetFilter}
        />
      </Form.Group>
    </Form>
  );
};

export default ContactFilter;
