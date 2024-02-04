export default function StartScreen({ numQuestions }) {
	return (
		<div className="start">
			<h2>Welcome to Quiz React!</h2>
			<h3>{numQuestions} questions to Test your React mastery</h3>
			<button className="btn btn-ui">Let&apos;s start</button>
		</div>
	);
}
