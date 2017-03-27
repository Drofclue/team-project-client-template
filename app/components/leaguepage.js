import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBarLeague from './rightsidebarleague';
import Footer from './footer.js';
import League from './league.js'

export default class LeaguePage extends React.Component {
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <League />
          <RightSideBarLeague />
        </div>
        <Footer />
      </div>
    )
  }
}
