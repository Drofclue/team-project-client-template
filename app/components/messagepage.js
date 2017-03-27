import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import Message from './message.js';

export default class MessagePage extends React.Component {
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <Message />
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
