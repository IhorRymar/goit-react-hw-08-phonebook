import PropTypes from 'prop-types';
import css from '../Phonebook/ContactsStyle.module.css';

const ContactsListItem = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  children: PropTypes.node.isRequired,
};
