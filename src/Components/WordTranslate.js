import React from 'react'
import { Animate } from "react-simple-animate";


function WordTranslate({ wordTranslate, dbClicked, setDbClicked }) {
	return (
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
						<span>{wordTranslate[0].eng} : </span>
						<span>{wordTranslate[0].kyr}</span>
					</h2>
				) : (
					<h2>Котормосу жок</h2>
				)}
				<button onClick={() => setDbClicked(false)} type="button" className="btn-close" aria-label="Close"></button>
			</div>
		</Animate>
	)
}

export default WordTranslate
