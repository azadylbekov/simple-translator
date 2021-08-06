import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { rules } from '../data/rules';


function GrammarPage() {

	const { id } = useParams();
	const [allRules, setRules] = useState('')


	useEffect(() => {
		setRules(rules.filter(rule => rule.id === Number(id)));
	}, [])

	return (
		<div className='grammar-page'>
			<div className="container my-5">
				{allRules && (
					allRules.map((rule, idx) => (
						<div key={idx} className="wrapper">
							<h2>{rule.name}</h2>
							{rule.explanation.map((exp, idx) => (
								<p className="fs-4" key={idx}>{exp}</p>
							))}
							<div className="video-container">
								<iframe
									width="700"
									height="500"
									src={`https://www.youtube.com/embed/${rule.videoEmbedURL}`}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen>
								</iframe>
							</div>
						</div>
					))
				)}


			</div>
		</div>
	)
}

export default GrammarPage
