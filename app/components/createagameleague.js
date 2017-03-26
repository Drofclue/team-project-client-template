  import React from 'react';
  import LeftNavBar from './leftnavbar';
  import RightSideBar from './rightsidebar';
  import Footer from './footer.js';
  import CreateAGameBasic from './createagamebasic';
  import CreateAGameLeagueOptions from './createagameleagueoptions'

  export default class CreateAGameLeague extends React.Component {
    render(){
      return (
        <div className="container-fluid text-center">
          <div className="row content">
            <LeftNavBar />
            <div className="col-md-7 text-left">
              <p><h2>Create a Game</h2></p>
                <div className="panel panel-default">
                 <div className="panel-body">
                  <CreateAGameBasic />
                  <CreateAGameLeagueOptions />
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
