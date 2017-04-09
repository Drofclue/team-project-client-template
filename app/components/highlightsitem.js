import React from 'react';
import HighlightsUpdate from './highlightsupdate.js'
import HighlightsReactions from './highlightsreactions.js'
import Comment from './comment.js'
import CommentEntry from './commententry.js'

export default class HighlightsItem extends React.Component{
	render(){
		var data = this.props.data;
		var contents;
		switch(data.type) {
			case "highlightsUpdate":
				// Create a StatusUpdate. Dynamically created React component: needs a key.
				// Keys only need to be unique among *siblings*, so we can re-use the
				// same key as the HighlightsItem.
				contents = (
					<HighlightsUpdate key={data._id} user={data.contents.user} timestamp={data.contents.timestamp} location={data.contents.location}>
						{data.contents.contents}
					</HighlightsUpdate>
				);
				break;
			default:
				throw new Error("Unknown HighlightsItem: " + data.type);
		}
		return(
			<div className="col-md-7 text-left mid">
				<h1> Highlights</h1>
				<div className="panel panel-default highlights">
					<div className="panel-body post">
						{contents}
						<HighlightsReactions/>
						<div className="panel-footer comments">
							<div className="row people_reacted">
								<div className="col-md-12">
									<a href="#">{data.rsvpCounter.length} people</a> are going
								</div>
							</div>
							<hr />
							<CommentEntry>
								{
									data.comments.map((comment, i) => {
										// i is comment's index in comments array
										return (
											<Comment key={i} author={comment.user} postDate={comment.timestamp}>{comment.contents}</Comment>
										);
									})
								}
							</CommentEntry>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
