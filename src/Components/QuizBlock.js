import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Animate } from "react-simple-animate";
import { sentence } from '../data/sentence'
import { Link } from 'react-router-dom'

function QuizBlock() {
	const [data, setData] = useState([]);
	const [dataLoaded, setLoaded] = useState(false);
	const [currentWord, setCurrentWord] = useState(0);
	const [dbClicked, setDbClicked] = useState(false);
	const [wordTranslate, setWordTranslate] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setData(sentence);
			setLoaded(true);
		}, 1000)
	}, [])

	const clickRight = () => {
		if (currentWord + 1 < data.length) {
			setCurrentWord(prevState => prevState + 1)
		}
	}

	const clickLeft = () => {
		if (currentWord - 1 >= 0) {
			setCurrentWord(prevState => prevState - 1)
		}
	}

	const clickTranslate = (e) => {
		const fromWord = data[currentWord].words.filter(word => word.hasOwnProperty(e.target.textContent.trim()));
		setWordTranslate(fromWord);
		setDbClicked(true);
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setDbClicked(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, [dbClicked])

	return (
		<div className='quiz-block row align-items-center justify-content-center'>
			<div className="col-auto">
				<button onClick={clickLeft} type="button"
					className="btn btn-primary btn-lg d-flex align-items-center fs-3">
					<BsArrowLeft />
				</button>
			</div>
			<div className="col-lg-8 col-md-8 col-xl-10">
				<div className="sentence-card card bg-light mb-2">
					<div className="card-body">
						{dataLoaded ? (
							<h2 onDoubleClick={clickTranslate}>
								{data[currentWord].sentence.split(" ").map((word, idx) => (
									<span key={idx}>{word} </span>
								))}</h2>
						) : (
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						)}
					</div>
				</div>
				<Animate play={dbClicked}
					start={{ opacity: 0 }}
					duration={1}
					end={{ opacity: 1 }}
				>
					<div
						style={{ display: dbClicked ? 'block' : 'none' }}
						className="alert alert-primary alert-dismissible fade show"
						role="alert">
						{wordTranslate[0] ? (
							<h2>
								<span>{Object.keys(wordTranslate[0])[0]} : </span>
								<span>{wordTranslate[0][Object.keys(wordTranslate[0])[0]]}</span>
							</h2>
						) : (
							<h2>Котормосу жок</h2>
						)}
						<button onClick={() => setDbClicked(false)} type="button" className="btn-close" aria-label="Close"></button>
					</div>
				</Animate>
				<div className="words-card card bg-light mb-2">
					<div className="card-body">
						<div className="sentence-block">
							{dataLoaded ?
								(
									data[currentWord].words.filter(word => !word.known).map((word, idx) => (
										<h2 key={idx}>
											<span>{Object.keys(word)[0]} : </span>
											<span>{word[Object.keys(word)[0]]}</span>
										</h2>
									))
								) :
								(
									<div className="spinner-border" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								)
							}
						</div>
					</div>
				</div>
				<div className="grammar-cards card bg-light">
					<div className="card-body">
						{dataLoaded ? (
							data[currentWord].grammar.filter(gram => gram.isNew).length === 0 ? (
								""
							) : (
								<div className="new-rules">
									<h2 className="mb-2">Бул сүйлөмдөгү жаны эр эжелери</h2>
									{data[currentWord].grammar.filter(gram => gram.isNew).map((item, idx) => (
										<div key={idx} className="card card-body my-2 alert-danger">
											<h3>{item.rule}</h3>
											<h4><Link to={`/grammar-page/${item.pageId}`}>{item.rule} жөнүндө маалымат</Link></h4>
										</div>
									))}
								</div>
							)
						) : (
							<div className="spinner-border" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						)}
						<div className="old-rules">
							<h2 className="">Бул сүйлөмдөгү эр эжелери</h2>
							{dataLoaded ? (
								data[currentWord].grammar.filter(gram => !gram.isNew).map((item, idx) => (
									<div className="card card-body alert-primary my-3">
										<h3>{item.rule}</h3>
										<h4><Link to={`/grammar-page/${item.pageId}`}>{item.rule} жөнүндө маалымат</Link></h4>
									</div>
								))
							) :
								(
									<div className="spinner-border" role="status">
										<span className="visually-hidden">Loading...</span>
									</div>
								)}
							{/* <div className="card card-body  alert-primary my-3">
								<h3>Present Simple</h3>
								<h4><a href="">Present simple жөнүндө маалымат</a></h4>
							</div> */}
						</div>

						{/* <div className="new-rules">
							<h2 className="mb-2">Бул сүйлөмдөгү жаны эр эжелери</h2>
							<div className="card card-body  m-2 alert-danger">
								<h3>Present Continues</h3>
								<h4><a href="">Present Continues жөнүндө маалымат</a></h4>
							</div>
						</div> */}
					</div>
				</div>
			</div >
			<div className="col-auto">
				<button onClick={clickRight} type="button"
					className="btn btn-primary btn-lg d-flex align-items-center fs-3">
					<BsArrowRight />
				</button>
			</div>


		</div >
	)
}

export default QuizBlock
