import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';

export default class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <div className="col-md-7 text-left">

          </div>
          <RightSideBar user={this.state.user}/>
        </div>
        <Footer />
      </div>
    )
  }
}
