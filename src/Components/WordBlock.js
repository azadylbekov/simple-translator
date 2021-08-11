import React from 'react'

function WordBlock({ data, currentWord }) {
	return (
		<div className="words-card card bg-light mb-2">
			<div className="card-body">
				<div className="words-block">
					{data[currentWord].words.filter(word => !word.known).map((word, idx) => (
						<h2 key={idx}>
							<span>{word.eng} : </span>
							<span>{word.kyr}</span>
						</h2>
					))}
				</div>
			</div>
		</div>
	)
}

export default WordBlock
