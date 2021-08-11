import React from 'react'
import { Link } from 'react-router-dom'

function GrammarList({ data, currentWord }) {
	return (
		<div className="old-rules mt-5">
			<h4 className="">Бул сүйлөмдөгү эр эжелери</h4>
			{data[currentWord].grammar.filter(gram => !gram.isNew).map((item, idx) => (
				<div key={idx} className="mb-2">
					<h5><Link to={`/grammar-page/${item.pageId}`}>{item.rule} жөнүндө маалымат</Link></h5>
				</div>
			))}
		</div>
	)
}

export default GrammarList
