import React from 'react';
import {Link} from 'react-router';

export default class Leaguesport extends React.Component {
  render() {
    return (
      <div>
      <div className="media-left media-top">
          <span className="glyphicon glyphicon-time"></span>
      </div>
      <div className="media-body">
          <Link to ={"/schedule/"+ this.props.adminnum}>{this.props.date}</Link>: <i>{this.props.gametitle} against {this.props.team} @ {this.props.time}; {this.props.location}</i>
      </div>
      </div>











































    )
  }
}
