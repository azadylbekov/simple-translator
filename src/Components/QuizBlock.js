import React, { useState, useEffect } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { Animate } from "react-simple-animate";

const globalData = [
	{
		id: 1,
		sentence: 'The quick brown fox jumps over the lazy dog',
		words: [
			{ 'The': 'The (артикль)', known: true },
			{ 'quick': 'тез', known: false },
			{ 'brown': 'күрөң', known: false },
			{ 'fox': 'түлкү', known: true },
			{ 'jumps': 'секирет', known: true },
			{ 'over': 'устунон', known: true },
			{ 'lazy': 'жалкоо', known: false },
			{ 'dog': 'ит', known: true },
		]
	},
	{
		id: 2,
		sentence: 'My mom is 45 years old but she looks very young',
		words: [
			{ 'My': 'Менин', known: true },
			{ 'mom': 'апа', known: true },
			{ 'is': 'is (артикль)', known: true },
			{ 'years': 'жыл', known: false },
			{ 'old': 'карыган, эски', known: false },
			{ 'but': 'бирок', known: false },
			{ 'she': 'ал (аял, кыз)', known: false },
			{ 'looks': 'көрүнөт', known: false },
			{ 'very': 'абдан', known: true },
			{ 'young': 'жаш', known: false },
		]
	},
	{
		id: 3,
		sentence: 'Although my father is very angry, he has a heart like sugar and everyone knows it.',
		words: [
			{ 'Although': 'болсо да', known: false },
			{ 'my': 'менин', known: true },
			{ 'father': 'ата', known: true },
			{ 'is': 'is (артикль)', known: false },
			{ 'very': 'абдан', known: false },
			{ 'angry': 'ачуулуу', known: false },
			{ 'he': 'ал (бала, эркек)', known: true },
			{ 'has': 'бар', known: false },
			{ 'like': 'ошондой (окшош)', known: false },
			{ 'sugar': 'кант', known: false },
			{ 'and': 'анан (жана)', known: true },
			{ 'everyone': 'баары', known: false },
			{ 'knows': 'билет', known: true }
		]
	},
	{
		id: 4,
		sentence: 'My aunt lives abroad, so we can\'t meet her very often',
		words: [
			{ 'My': 'менин', known: true },
			{ 'aunt': 'жеңе', known: false },
			{ 'lives': 'жашайт', known: false },
			{ 'abroad': 'чет өлкөдө', known: false },
			{ 'so': 'ошондуктан', known: true },
			{ 'we': 'биз', known: false },
			{ 'сan\'t': 'кыла албайбыз', known: true },
			{ 'meet': 'жолугушуу', known: false },
			{ 'her': 'ал (аял, кыз)', known: true },
			{ 'very': 'абдан', known: false },
			{ 'often': 'көп учурда', known: true },
		]
	},
	{
		id: 5,
		sentence: 'We made chocolate cake with my little sister today',
		words: [
			{ 'We': 'Биз', known: true },
			{ 'made': 'жасадык', known: false },
			{ 'chocolate': 'шоколад', known: false },
			{ 'cake': 'торт', known: true },
			{ 'with': 'чогуу', known: false },
			{ 'my': 'менин', known: true },
			{ 'little': 'кичи (кичинекей)', known: false },
			{ 'sister': 'эже', known: false },
			{ 'today': 'бугун', known: true },
		]
	},
]


function QuizBlock() {
	const [data, setData] = useState([]);
	const [dataLoaded, setLoaded] = useState(false);
	const [currentWord, setCurrentWord] = useState(0);
	const [dbClicked, setDbClicked] = useState(false);
	const [wordTranslate, setWordTranslate] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setData(globalData);
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
		<div className='quiz-block'>
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
			<div className="words-card card bg-light">
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
			<div className="d-flex justify-content-between mt-3">
				<button onClick={clickLeft} type="button"
					className="btn btn-primary btn-lg d-flex align-items-center fs-3">
					<BsArrowLeft />
				</button>
				<button onClick={clickRight} type="button"
					className="btn btn-primary btn-lg d-flex align-items-center fs-3">
					<BsArrowRight />
				</button>
			</div>
		</div>
	)
}

export default QuizBlock
