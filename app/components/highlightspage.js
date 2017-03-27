import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import Highlights from './highlights.js';

export default class HighLightsPage extends React.Component {
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <Highlights />
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
