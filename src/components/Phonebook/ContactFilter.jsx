import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux/es/exports';
import { setFilter } from 'components/redux/filter/filter-actions';
import css from '../Phonebook/ContactsStyle.module.css';

function ContactFilter({ filter, onChange }) {
  return (
    <div className={css.form}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
      ></input>
    </div>
  );
}

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(setFilter(e.currentTarget.value)),
});

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
