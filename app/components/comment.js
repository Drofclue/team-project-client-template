import React from 'react';

export default class Comment extends React.Component{
  render(){
    return(
      <li className="media">
          <div className="media-left media-top">
            <span className="media-left media-top">
              <img src={this.props.avatar} alt="avatar" className="img-circle" height="35" width="35"></img>
            </span>
          </div>
          <div className="media-body">
              <a href="#">{this.props.author}</a> {this.props.children}
              <br /><a href="#">Like</a> · <a href="#">Reply</a> · {this.props.postDate}
          </div>
      </li>
    )
  }
}
