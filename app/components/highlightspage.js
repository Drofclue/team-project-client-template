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

refresh() {
  getHighlightsData(this.props.user, (highlightsData) => {
    this.setState(highlightsData);
  });
}

componentDidMount() {
  this.refresh();
}
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <Highlights key={this.state._id} data={this.state}/>
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
