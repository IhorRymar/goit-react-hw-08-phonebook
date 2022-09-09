import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/apiContacts';

export const fetchContacts = createAsyncThunk(
  'contscts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const isDublicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find(contact => {
    return normalizedName === contact.name.toLowerCase();
  });

  return Boolean(result);
};

export const addContact = createAsyncThunk(
  'contscts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        alert(`${data.name} is already in contact`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
