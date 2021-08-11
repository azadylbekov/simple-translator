import React from 'react'

function SentenceCard({ clickTranslate, data, currentWord }) {
	return (
		<div className="sentence-card card bg-light mb-2">
			<div className="card-body">
				<h2 onDoubleClick={clickTranslate}>
					{data[currentWord].sentence.split(" ").map((word, idx) => (
						<span key={idx}>{word} </span>
					))}</h2>
			</div>
		</div>
	)
}

export default SentenceCard
