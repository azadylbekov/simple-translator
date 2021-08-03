import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import QuizBlock from './Components/QuizBlock';

function App() {
	return (
		<div className="App d-flex flex-column justify-content-between">
			<Header />
			<div className="container my-5">
				<QuizBlock />
			</div>
			<Footer />
		</div>
	);
}

export default App;
