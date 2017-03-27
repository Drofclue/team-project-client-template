import React from 'react';
import MessageFriends from './messagefriends.js';
import UserMessagesChat from './usermessageschat.js';

export default class Template extends React.Component {
  render(){
    return (
        <div className="col-md-7 text-left">
					<MessageFriends />
					<UserMessagesChat />
        </div>
    )
  }
}
