import React from 'react';
import {unixTimeToString} from '../util';
import {Link} from 'react-router';

export default class Comment extends React.Component{
  render(){
    return(
      <div className="media comments">
          <div className="media-left media-top">
            <span className="media-left media-top">
              <img src={this.props.avatar} alt="avatar" className="img-circle" height="35" width="35"></img>
            </span>
          </div>
          <div className="media-body">
              <Link to={"/user/" + this.props.user._id}>{this.props.username}</Link>
                {this.props.message}
              <br />{unixTimeToString(this.props.timestamp)}
              <hr />
          </div>
      </div>
    )
  }
}
