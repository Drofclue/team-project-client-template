  import React from 'react';
  import LeftNavBar from './leftnavbar';
  import RightSideBar from './rightsidebar';
  import Footer from './footer.js';
  import Fgresultlist from './fgresultlist.js';
  import Fgsearchbox from './fgsearchbox.js';


  export default class Findagame extends React.Component {
    constructor(props){
      super(props)
      this.state = props;
    }


    render(){
      return (
        <div className="container-fluid text-center">
          <div className="row content">
            <LeftNavBar userData={this.state}/>
            <div className="col-md-7 text-left">
              <h2>Find a Game</h2>
              <Fgsearchbox></Fgsearchbox>
              <Fgresultlist></Fgresultlist>

            </div>
            <RightSideBar userData={this.state}/>
          </div>
          <Footer />
        </div>
      )
    }
  }
