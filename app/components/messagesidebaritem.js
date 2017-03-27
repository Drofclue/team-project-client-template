import React from 'react';

export default class MessageSidebarItem extends React.Component{
	render(){
		return(
			<div>
				<div className="media">
					<div className="media-left media-top">
						<div className="cd-timeline-img">
							<img src={this.props.avatar} width="40" height="40"  alt="Picture" />
						</div>
					</div>

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
