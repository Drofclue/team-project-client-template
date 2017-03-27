import React from 'react';

export default class Comment extends React.Component{
  render(){
    return(
      <li className="media">
          <div className="media-left media-top">
              <div className="cd-timeline-img">
                  <img src={this.props.avatar} width="35" height="35" alt="Picture" />
              </div>
          </div>
          <div className="media-body">
              <a href="#">{this.props.author}</a> {this.props.children}
              <br /><a href="#">Like</a> · <a href="#">Reply</a> · {this.props.postDate}
          </div>
      </li>
    )
  }
}
