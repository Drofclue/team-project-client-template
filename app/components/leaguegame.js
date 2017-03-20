import React from 'react';

export default class Leaguegame extends React.Component {
  render() {
    return (
      <div>
      <div className="media-left media-top">
          <span className="glyphicon glyphicon-time"></span>
      </div>
      <div className="media-body">
          <a href="#">{this.props.date}</a>: <i>{this.prop.gametitle} @ {this.props.time}; {this.props.team}</i>
      </div>
      </div>











































    )
  }
}
