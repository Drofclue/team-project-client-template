import React from 'react';
import HighlightsUpdate from './highlightsupdate.js'
import HighlightsReactions from './highlightsreactions.js'
import Comment from './comment.js'
import CommentEntry from './CommentEntry.js'

export default class HighlightsItem extends React.Component{
	render(){
		return(
			<div className="col-md-7 text-left mid">
				<h1> Highlights</h1>
				<div className="panel panel-default highlights">
					<div className="panel-body post">
						<HighlightsUpdate avatar='img/profile.svg' user='League of Games' timestamp='Today at 3:48pm' location='Northampton, MA'
							message='League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields.'/>
						<hr />
						<HighlightsReactions/>
						<hr />
						<div className="row people_reacted">
							<div className="col-md-12">
								<a href="#">13 people</a> are going
							</div>
						</div>
						<hr />
						<Comment avatar='img/bof.png' user='Fury of Balls' message='Hope no one comes!' timestamp='20 hrs'/>
						<hr />
						<Comment avatar='img/fob.png' user='Balls of Fury' message='#rekt' timestamp='19 hrs'/>
						<hr />
						<CommentEntry avatar='img/you.jpeg'/>
					</div>
				</div>
				<div className="panel panel-default highlights">
					<div className="panel-body post">
						<HighlightsUpdate avatar='img/profile.svg' user='League of Games' timestamp='Today at 3:48pm' location='Northampton, MA'
							message='League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields.'/>
						<hr />
						<HighlightsReactions/>
						<hr />
						<div className="row people_reacted">
							<div className="col-md-12">
								<a href="#">2 people</a> are going
							</div>
						</div>
						<hr />
						<CommentEntry avatar='img/you.jpeg'/>
					</div>
				</div>
			</div>
		)
	}
}
