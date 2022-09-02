import { createReducer } from '@reduxjs/toolkit';
// import { ADD_CONTACT, REMOVE_CONTACT } from './contacts-types';
import { addContact, removeContact } from './contacts-actions';
// import store from '../store';

const contactsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const initialStore = [];

// const contactsReducer = (store = initialStore, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...store, payload];
//     case REMOVE_CONTACT:
//       return store.filter(({ id }) => id !== payload);
//     default:
//       return store;
//   }
// };

export default contactsReducer;
