import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6346f9f4db76843976a38a3e.mockapi.io';

export const getContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const allContacts = await axios.get(`/contacts`);
			return allContacts.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
export const addContacts = createAsyncThunk(
	'contacts/addAll',
	async (item, thunkAPI) => {
		try {
			const addedContact = await axios.post(`/contacts`, item);
			return addedContact.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteContacts = createAsyncThunk(
	'contacts/deleteAll',
	async (id, thunkAPI) => {
		try {
			const deletedContact = await axios.delete(`/contacts/${id}`);
			return deletedContact.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
