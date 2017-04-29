import React from 'react';

export default class CommentEntry extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
     value: ""
   };
 }

 handleChange(e) {
   this.setState({ value: e.target.value });
 }

 handleKeyUp(e) {
   if (e.key === "Enter") {
     var comment = this.state.value.trim();
     if (comment !== "") {
       // Post comment
       this.props.onPost(this.state.value);
       this.setState({ value: "" });
     }
   }
 }
  render(){
    return(
      <div>
        <div className="media-left media-top">
          <span className="media-left media-top">
						<img src={this.props.avatar} alt="avatar" className="img-circle" height="35" width="35"></img>
					</span>
        </div>
        <div className="media-body">
          <div className="input-group">
            <input type="text" className="form-control send_message" placeholder="Write a comment..."
              value={this.state.value} onChange={(e) => this.handleChange(e)}
              onKeyUp={(e) => this.handleKeyUp(e)} />
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
