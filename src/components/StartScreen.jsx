export default function StartScreen({ numQuestions, dispatch }) {
	return (
		<div className="start">
			<h2>Welcome to Quiz React!</h2>
			<h3>{numQuestions} questions to Test your React mastery</h3>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: 'start' })}
			>
				Let&apos;s start
			</button>
		</div>
	);
}
