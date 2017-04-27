import React from 'react';
import HighlightsUpdate from './highlightsupdate.js'
import Comment from './comment.js'
import CommentThread from './commentthread.js'
import {unixTimeToString} from '../util.js'
import {postComment} from '../server';
import {unrsvpHighlightsItem} from '../server';
import {rsvpHighlightsItem} from '../server';

export default class HighlightsItem extends React.Component{
	constructor(props) {
	super(props);
	this.state = props.data;
	}
	handleCommentPost(commentText) {
    postComment(this.state._id, 1, commentText, (updatedHighlightsItem) => {
      this.setState(updatedHighlightsItem);
    });
  }
	handleRsvpClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      var callbackFunction = (updatedRsvpCounter) => {
        this.setState({rsvpCounter: updatedRsvpCounter});
      };

      if (this.didUserRsvp()) {
        unrsvpHighlightsItem(this.state._id, 1, callbackFunction);
      } else {
        rsvpHighlightsItem(this.state._id, 1, callbackFunction);
      }
    }
	}
	didUserRsvp() {
    var rsvpCounter = this.state.contents[0].rsvpCounter;
    var rsvpd = false;
    // Look for a rsvpCounter entry with userId 4 -- which is the
    // current user.
    for (var i = 0; i < rsvpCounter.length; i++) {
      if (rsvpCounter[i]._id === 1) {
        rsvpd = true;
        break;
      }
    }
    return rsvpd;
  }
	render(){
		var rsvpButtonText = "RSVP";
    if (this.didUserRsvp()) {
      rsvpButtonText = "UNRSVP";
    }
		var data = this.props.data;
		return(
			<div className="col-md-7 text-left mid">
				<h1> Highlights</h1>
				<div className="panel panel-default highlights">
					<div className="panel-body post">
						<HighlightsUpdate key={data._id} avatar={data.contents[0].contents.user.profilepicture} user={data.contents[0].contents.user} timestamp={unixTimeToString(data.contents[0].contents.timestamp)} location={data.contents[0].contents.location}
							message={data.contents[0].contents.contents}>
							{data.contents[0].contents.contents.split("\n").map((line, i) => {
              // Note: 'i' is the index of line in data.contents.contents.
              return (
                <p key={"line" + i}>{line}</p>
              );
            })}
						</HighlightsUpdate>
						<div className="row">
							<div className="col-md-12 reactions">
								<ul className="list-inline">
									<li>
										<a href="#" onClick={(e) => this.handleRsvpClick(e)}>
											<span className="glyphicon glyphicon-ok"></span> {rsvpButtonText}
											</a>
										</li>
									</ul>
								</div>
							</div>
						<div className="panel-footer comments">
							<div className="row people_reacted">
								<div className="col-md-12">
									<a href="#">{data.contents[0].rsvpCounter.length} people</a> are going
								</div>
								<hr />
							</div>
							<CommentThread onPost={(commentText) => this.handleCommentPost(commentText)}>
								{
									data.contents[0].comments.map((comment, i) => {
										// i is comment's index in comments array
										return (
											<Comment key={i}  user={comment.user} username={comment.user.username} avatar={comment.user.profilepicture} timestamp={comment.timestamp} message={comment.contents}></Comment>
										);
									})
								}
							</CommentThread>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
