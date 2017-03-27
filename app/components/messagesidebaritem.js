import React from 'react';

export default class MessageSidebarItem extends React.Component{
	render(){
		return(
			<div>
				<div className="media">
					<span className="media-left media-top">
						<img src={this.props.avatar} alt="avatar" className="img-circle" height="40" width="40"></img>
					</span>
					<div className="media-body">
							<a href="#">{this.props.user}</a>
							<span className="glyphicon glyphicon-remove pull-right"></span>
							<br />
							{this.props.timestamp}
							<span className="glyphicon glyphicon-comment pull-right"></span>
							<span className="badge pull-right">{this.props.notifications}</span>
					</div>
				</div>
			</div>
		)
	}
}
