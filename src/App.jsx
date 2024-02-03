import './App.css';
import Header from './Header.jsx';
import AppMain from './AppMain.jsx';

export default function App() {
	return (
		<div className="app">
			<Header />

			<AppMain>
				<p>1/15</p>
				<p>Question?</p>
			</AppMain>
		</div>
	);
}
