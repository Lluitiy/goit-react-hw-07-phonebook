import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contact/contactSlice';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
// import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
	reducer: {
		contacts: persistedContactsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export const persistor = persistStore(store);
