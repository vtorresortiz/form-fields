import Field from './Field';

function Form({submitForm, store}) {
	return (
		<form onSubmit={submitForm}>
			<Field id='field1' store={store} />
			<Field id='field2' store={store} />
			<Field id='field3' store={store} />
			<Field id='field4' store={store} />
			<Field id='field5' store={store} />
			<Field id='field6' store={store} />
			<Field id='field7' store={store} />
		</form>
	);
}

export default Form;
