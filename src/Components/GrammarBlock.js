import React from 'react'
import { Link } from 'react-router-dom'

function GrammarBlock({ currentWord, data }) {
	return (
		data[currentWord].grammar.filter(item => item.isNew).length !== 0 && (
			<div className="grammar-cards card bg-light mt-5">
				<div className="card-body row align-items-top gx-2">
					<h4 className="">Бул сүйлөмдөгү жаны эр эжелери</h4>
					{data[currentWord].grammar.filter(gram => gram.isNew).map((item, idx) => (
						<div className="col-6 new-rules">
							<div key={idx} className="card card-body alert-danger mb-2">
								<h4>{item.rule}</h4>
								<h5><Link to={`/grammar-page/${item.pageId}`}>{item.rule} жөнүндө маалымат</Link></h5>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	)
}

export default GrammarBlock
