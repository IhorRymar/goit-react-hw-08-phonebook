import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', payload => ({
  payload: {
    id: nanoid(),
    ...payload,
  },
}));

export const removeContact = createAction('contacts/remove');
