import '../App.css';
import Header from './Header.jsx';
import AppMain from './AppMain.jsx';
import Loader from './Loader.jsx';
import Error from './Error.jsx';
import StartScreen from './StartScreen.jsx';
import Question from './Question.jsx';
import NextButton from './NextButton.jsx';
import Progress from './Progress.jsx';
import { useEffect, useReducer } from 'react';

const initialState = {
	questions: [],

	status: 'loading',
	index: 0,
	answer: null,
	points: 0,
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
		case 'start':
			return { ...state, status: 'active' };

		case 'newAnswer':
			const question = state.questions.at(state.index);

			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points,
			};

		case 'nextQuestion':
			return { ...state, index: state.index + 1, answer: null };

		default:
			throw new Error('Action unknown!');
	}
}

export default function App() {
	const [{ questions, status, index, answer, points }, dispatch] = useReducer(
		reducer,
		initialState,
	);

	const numQuestions = questions.length;

	const maxPossiblePoints = questions.reduce(
		(prev, cur) => prev + cur.points,
		0,
	);

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
				{status === 'ready' && (
					<StartScreen numQuestions={numQuestions} dispatch={dispatch} />
				)}
				{status === 'active' && (
					<>
						<Progress
							index={index}
							numQuestions={numQuestions}
							points={points}
							maxPossiblePoints={maxPossiblePoints}
							answer={answer}
						/>

						<Question
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>

						<NextButton dispatch={dispatch} answer={answer} />
					</>
				)}
			</AppMain>
		</div>
	);
}
