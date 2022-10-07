import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const contactSlice = createSlice({
	name: 'contact',
	initialState: {
		contacts: [],
		filter: '',
	},
	reducers: {
		addContact(state, action) {
			state.contacts.push(action.payload);
		},
		removeContact(state, action) {
			console.log('payload', action.payload);
			state.contacts = state.contacts.filter(
				contact => contact.id !== action.payload
			);
		},
		filterContacts(state, action) {
			state.filter = action.payload;
		},
	},
});

const persistConfig = {
	key: 'contacts',
	storage,
	blacklist: ['filter'],
};
export const persistedContactsReducer = persistReducer(
	persistConfig,
	contactSlice.reducer
);

export const { addContact, removeContact, filterContacts } =
	contactSlice.actions;
