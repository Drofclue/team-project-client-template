import React from 'react';

export default class MessageChatItem extends React.Component{
	render(){
		return(
			<div>
				<div className="media">
					<div className="media-left media-top">
						{this.props.avatar}
					</div>
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
