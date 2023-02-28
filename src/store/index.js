import {configureStore} from '@reduxjs/toolkit';
import FormReducer from './formReducer.js';

export const store = configureStore({
	reducer: {
		form: FormReducer,
	},
});
