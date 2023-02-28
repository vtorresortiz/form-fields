import {createSlice} from '@reduxjs/toolkit';

const initialState = { };

export const formSlicer = createSlice({
	name: 'form',
	initialState,
	reducers: {
		write(state, action) {
			state[action.payload.store.id] = {...state[action.payload.store.id], [action.payload.field.id]: action.payload.field};
		},
	},
});

export const {write} = formSlicer.actions;
export default formSlicer.reducer;
