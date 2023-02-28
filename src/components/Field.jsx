import React from 'react';
import {TextField} from '@mui/material';
import {useDispatch} from 'react-redux';
import {write} from 'store/formReducer';

function Field({id, store}) {
	const dispatch = useDispatch();
	const fieldRef = React.useRef();

	const writeField = evt => {
		evt.preventDefault();
		const value = fieldRef.current.value || '';
		dispatch(write({field: {id, value}, store}));
	};

	return (
		<div>
			<TextField inputRef={fieldRef} onChange={writeField} />
		</div>
	);
}

export default Field;
