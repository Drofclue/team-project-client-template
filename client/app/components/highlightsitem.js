import React from 'react';
import HighlightsUpdate from './highlightsupdate.js'
import HighlightsReactions from './highlightsreactions.js'
import Comment from './comment.js'
import CommentEntry from './commententry.js'
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
    // Post a comment as user ID 1, which is our mock user!
    postComment(this.state._id, 1, commentText, (updatedHighlightsItem) => {
      // Update our state to trigger a re-render.
      this.setState(updatedHighlightsItem);
    });
  }
	handleRsvpClick(clickEvent) {
    // Stop the event from propagating up the DOM tree, since we handle it here.
    // Also prevents the link click from causing the page to scroll to the top.
    clickEvent.preventDefault();
    // 0 represents the 'main mouse button' -- typically a left click
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
    if (clickEvent.button === 0) {
      // Callback function for both the rsvp and unrsvp cases.
      var callbackFunction = (updatedRsvpCounter) => {
        // setState will overwrite the 'rsvpCounter' field on the current
        // state, and will keep the other fields in-tact.
        // This is called a shallow merge:
        // https://facebook.github.io/react/docs/component-api.html#setstate
        this.setState({rsvpCounter: updatedRsvpCounter});
      };

      if (this.didUserRsvp()) {
        // User clicked 'unrsvp' button.
        unrsvpHighlightsItem(this.state._id, 1, callbackFunction);
      } else {
        // User clicked 'rsvp' button.
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
		var rsvpButtonText = "Rsvp";
    if (this.didUserRsvp()) {
      rsvpButtonText = "Unrsvp";
    }
		var data = this.props.data;
		var contents;
				contents = (
					<HighlightsUpdate key={data._id} user={data.contents.user} timestamp={unixTimeToString(data.contents.timestamp)} location={data.contents.location}
						message={data.contents.contents}>
					</HighlightsUpdate>
				);
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
									<a href="#">{data.contents[0].rsvpCounter.length} people</a> are going
								</div>
							</div>
							<hr />
							<CommentEntry onPost={(commentText) => this.handleCommentPost(commentText)}>
								{
									data.contents[0].comments.map((comment, i) => {
										// i is comment's index in comments array
										return (
											<Comment key={i} username={comment.user.username} timestamp={comment.timestamp} message={comment.contents}></Comment>
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
