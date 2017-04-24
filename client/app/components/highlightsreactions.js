import React from 'react';

export default class HighlightsReactions extends React.Component{
  render(){
    return(
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
    )
  }
}
