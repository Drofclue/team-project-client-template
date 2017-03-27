import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import MessageFriends from './messagefriends.js'
import UserMessagesChat from './usermessageschat'

export default class Template extends React.Component {
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <div className="col-md-7 text-left">
						<MessageFriends />
						<UserMessagesChat />
          </div>
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
