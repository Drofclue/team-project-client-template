  import React from 'react';
  import LeftNavBar from './leftnavbar';
  import RightSideBar from './rightsidebar';
  import Footer from './footer.js';
  import CreateAGameBasic from './createagamebasic';

  export default class CreateAGame extends React.Component {
    render(){
      return (
        <div className="container-fluid text-center">
          <div className="row content">
            <LeftNavBar />
            <div className="col-md-7 text-left">
              <h2>Create a Game</h2>
                <div className="panel panel-default">
                 <div className="panel-body">
                  <CreateAGameBasic />
                  <button type="submit" className="btn pull-right">Submit</button>
                  </div>
                </div>
            </div>
            <RightSideBar />
          </div>
          <Footer />
        </div>
      )
    }
  }
