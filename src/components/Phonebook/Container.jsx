import PropTypes from 'prop-types';

import css from '../Phonebook/ContactsStyle.module.css';

const Container = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
