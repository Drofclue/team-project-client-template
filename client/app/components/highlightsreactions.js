import React from 'react';

export default class HighlightsReactions extends React.Component{
  render(){
    var rsvpButtonText = "RSVP";
    if (this.didUserRsvp()) {
      rsvpButtonText = "UNRSVP";
    }
    return(
      <div className="row">
        <div className="col-md-12 reactions">
          <ul className="list-inline">
            <li>
              <a href="#" onClick={(e) => this.handleLikeClick(e)}>
                    <span className="glyphicon glyphicon-ok"></span> {rsvpButtonText}
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
