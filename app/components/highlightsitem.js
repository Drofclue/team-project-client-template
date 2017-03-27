import React from 'react';
import HighlightsUpdate from './highlightsupdate.js'
import CommentThread from './commentthread.js'
import Comment from './comment.js'

export default class HighlightsItem extends React.Component{
	render(){
		return(
			<div className="col-md-7 text-left mid">
				<h1> Highlights</h1>
				<div className="panel panel-default highlights">
					<div className="panel-body post">
						<HighlightsUpdate avatar="img/profile.svg" author="League of Games" postDate="Today at 3:48pm" location="Northampton, MA">
							League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields.
						</HighlightsUpdate>
						<hr />
						<div className="row">
							<div className="col-md-12 reactions">
								<ul className="list-inline">
									<li>
										<a href="#"><span className="glyphicon glyphicon-ok">
										</span> RSVP</a>
									</li>
									<li>
										<a href="#"><span className="glyphicon glyphicon-comment">
										</span> Comment</a>
									</li>
									<li>
										<a href="#"><span className="glyphicon glyphicon-share-alt">
										</span> Share</a>
									</li>
								</ul>
							</div>
						</div>
						<hr />
					</div>
					<div className="panel-footer comments">
						<div className="row people_reacted">
							<div className="col-md-12">
								<a href="#">2 people</a> are going
							</div>
						</div>
						<hr />
						<CommentThread>
							<Comment avatar="img/bof.png" author="Fury of Balls" postDate="20 hrs">
								hope no one comes!
							</Comment>
							<Comment avatar="img/tob.png" author="Balls of Fury" postDate="19 hrs">
								sending hugs your way
							</Comment>
						</CommentThread>
					</div>
				</div>
			</div>
		)
	}
}
