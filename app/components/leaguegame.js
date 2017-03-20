import React from 'react';

export default class Leaguesport extends React.Component {
  render() {
    return (
      <div>
      <div className="media-left media-top">
          <span className="glyphicon glyphicon-time"></span>
      </div>
      <div className="media-body">
          <a href="#">{this.props.date}</a>: <i>{this.props.gametitle} against {this.props.team} @ {this.props.time}; {this.props.location}</i>
      </div>
      </div>











































    )
  }
}
