import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import QuizBlock from './Components/QuizBlock';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GrammarPage from './Pages/GrammarPage';

function App() {
	return (
		<Router>
			<div className="App d-flex flex-column justify-content-between">
				<Header />
				<Switch>
					<Route exact path='/'>
						<div className="container my-5">
							<QuizBlock />
						</div>
					</Route>
					<Route exact path='/grammar-page/:id'>
						<GrammarPage />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
