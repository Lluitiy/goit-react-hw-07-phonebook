import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contact/contactSlice';

export const store = configureStore({
	reducer: contactsReducer,
});
