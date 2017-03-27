import React from 'react';

export default class CommentEntry extends React.Component{
  render(){
    return(
      <div>
        <div className="media-left media-top">
          <div className="cd-timeline-img">
            <img src={this.props.avatar} width="35" height="35" alt="Picture" />
          </div>
        </div>
        <div className="media-body">
          <div className="input-group">
            <input type="text" className="form-control send_message" placeholder="Write a comment..." />
            <span className="input-group-btn send_button">
            <button type="submit" className="btn btn-default send_button">
            <span className="glyphicon glyphicon-send send_icon"></span>
            </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
