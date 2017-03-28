import React from 'react';

export default class Comment extends React.Component{
  render(){
    return(
      <div className="media">
          <div className="media-left media-top">
            <span className="media-left media-top">
              <img src={this.props.avatar} alt="avatar" className="img-circle" height="35" width="35"></img>
            </span>
          </div>
          <div className="media-body">
              <a href="#">{this.props.user}</a>
                {this.props.message}
              <br /><a href="#">Like</a> · <a href="#">Reply</a> · {this.props.timestamp}
          </div>
      </div>
    )
  }
}
