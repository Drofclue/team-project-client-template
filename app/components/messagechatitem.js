import React from 'react';

export default class MessageChatItem extends React.Component{
	render(){
		return(
			<div>
				<div className="media">
					<div className="media-left media-top">
						{this.props.avatar}
					</div>
					
				</div>
			</div>
		)
	}
}
