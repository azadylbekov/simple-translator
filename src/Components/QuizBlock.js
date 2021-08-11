import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { sentence } from '../data/sentence'
import WordTranslate from './WordTranslate';
import GrammarBlock from './GrammarBlock';
import SentenceCard from './SentenceCard';
import WordBlock from './WordBlock';
import GrammarList from './GrammarList';

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
		const fromWord = data[currentWord].words.filter(word => word.eng === e.target.textContent.trim());
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
			{dataLoaded ? (
				<div className="col-lg-8 col-md-8 col-xl-10">
					<SentenceCard
						clickTranslate={clickTranslate}
						data={data}
						currentWord={currentWord}
					/>
					<WordTranslate
						wordTranslate={wordTranslate}
						dbClicked={dbClicked}
						setDbClicked={setDbClicked}
					/>
					<WordBlock
						data={data}
						currentWord={currentWord}
					/>
					<GrammarBlock
						currentWord={currentWord}
						data={data}
					/>
					<GrammarList
						data={data}
						currentWord={currentWord}
					/>
				</div >
			) : (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div >
			)
			}
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
