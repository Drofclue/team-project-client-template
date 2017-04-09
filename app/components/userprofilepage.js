import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import UserProfile from './userprofile.js';

export default class UserProfilePage extends React.Component {
  render(){
    return(
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <div className="col-md-7 text-left">
            <UserProfile />
          </div>
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
