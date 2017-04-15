  import React from 'react';
  import LeftNavBar from './leftnavbar';
  import RightSideBar from './rightsidebar';
  import Footer from './footer.js';
  import CreateAGameBasic from './createagamebasic';
  import CreateAGameLeagueOptions from './createagameleagueoptions'
  import {getUserData} from '../server';

  export default class CreateAGameLeague extends React.Component {
    constructor(props){
      super(props);
      this.state=props;
    }
    refresh() {
      getUserData(this.props.user, (userData) => {
        this.setState(userData);
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
            <div className="col-md-7 text-left">
              <h2>Create a Game</h2>
                <div className="panel panel-default">
                 <div className="panel-body">
                  <CreateAGameBasic />
                  <CreateAGameLeagueOptions />
                  <button type="submit" className="btn pull-right">Submit</button>
                  </div>
                </div>
            </div>
            <RightSideBar userData={this.state}/>
          </div>
          <Footer />
        </div>
      )
    }
  }
