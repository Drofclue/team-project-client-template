import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import Highlights from './highlights.js';
import {getHighlightsData} from '../server'

export default class HighLightsPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}
  render(){
    getHighlightsData(2, (highlightsData) => this.setState(highlightsData))
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <Highlights key={this.state._id} user={2} data={this.state}/>
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
