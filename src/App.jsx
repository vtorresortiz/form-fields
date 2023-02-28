import './App.css';
import Form from 'components/Form';

function App() {
	const store = {id: 'myform'};

	return (
		<div className='App'>
			<p>
        Hello world!
			</p>
			<Form store={store} />
		</div>
	);
}

export default App;
