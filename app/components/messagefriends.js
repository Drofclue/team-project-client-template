import React from 'react';
import MessageSidebarItem from './messagesidebaritem.js'

export default class MessageFriends extends React.Component{
	render(){
		return(
			<div className="col-md-5 text-left">
			<p><h2>Friends</h2></p>
				<div className="panel panel-default friends">
					<div className="panel-body">
						<ul className="nav nav-pills nav-stacked">
							<li role="presentation">
								<a href="#"><span className="glyphicon glyphicon-plus"></span>
									New message</a>
							</li>
						</ul>
						<hr />
						<MessageSidebarItem avatar='img/cherry.png' user='LingoDaddy24' timestamp='About a minute ago' notifications=''>
						</MessageSidebarItem>
						<hr />
						<MessageSidebarItem avatar='img/cherry.png' user='LingoDaddy34' timestamp='Today at 12:39am' notifications='23'>
						</MessageSidebarItem>
						<hr />
						<MessageSidebarItem avatar='img/cherry.png' user='LingoDaddy44' timestamp='Yesterday at 12:39am' notifications='46'>
						</MessageSidebarItem>
						<hr />
						<MessageSidebarItem avatar='img/cherry.png' user='LingoDaddy54' timestamp='Thursday at 12:39am' notifications='69'>
						</MessageSidebarItem>
					</div>
				</div>
			</div>
		)
	}
}
