import React from 'react';

export default class MessageChatItem extends React.Component{
	render(){
		return(
			<div>
				<div className="media">
					<span className="media-left media-top">
						<img src={this.props.avatar} alt="avatar" className="img-circle" height="40" width="40"></img>
					</span>
					<div className="media-body">
						<a href="#">{this.props.user}</a>
						<span className="green">{this.props.status}</span>
						<br />{this.props.message}
						<font color="grey" >
							<p className="timestamp pull-right">
								<span className="glyphicon glyphicon-time"></span>
								{this.props.timestamp}
							</p>
						</font>
					</div>
				</div>
			</div>
		)
	}
}
