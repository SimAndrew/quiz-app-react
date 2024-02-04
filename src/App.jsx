import './App.css';
import Header from './Header.jsx';
import AppMain from './AppMain.jsx';
import Loader from './Loader.jsx';
import Error from './Error.jsx';
import StartScreen from './StartScreen.jsx';
import { useEffect, useReducer } from 'react';

const initialState = {
	questions: [],

	status: 'loading',
};

function reducer(state, action) {
	switch (action.type) {
		case 'dataReceived':
			return {
				...state,
				questions: action.payload,
				status: 'ready',
			};
		case 'dataFailed':
			return {
				...state,
				status: 'error',
			};

		default:
			throw new Error('Action unknown!');
	}
}

export default function App() {
	const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

	const numQuestions = questions.length;

	useEffect(function () {
		fetch('http://localhost:8000/questions')
			.then((res) => res.json())
			.then((data) => dispatch({ type: 'dataReceived', payload: data }))
			.catch((err) => dispatch({ type: 'dataFailed' }));
	}, []);

	return (
		<div className="app">
			<Header />

			<AppMain>
				{status === 'loading' && <Loader />}
				{status === 'error' && <Error />}
				{status === 'ready' && <StartScreen numQuestions={numQuestions} />}
			</AppMain>
		</div>
	);
}
