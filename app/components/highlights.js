import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import HighlightsItem from './highlightsitem.js'

export default class Highlights extends React.Component {
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
					<h1>Hellooo</h1>
          <HighlightsItem />
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
