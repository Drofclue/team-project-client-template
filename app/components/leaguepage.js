import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBarLeague from './rightsidebarleague';
import Footer from './footer.js';
import League from './league.js';
import {getLeagueData} from '../server';


export default class LeaguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state=props;
    userContents : []
  }
  refresh() {
    getLeagueData(this.props.league, (leagueData) => {
      this.setState(leagueData);
    });
  }

  componentDidMount() {
    this.refresh();
  }
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar leagueData={this.state}/>
          <League leagueData= {this.state}/>
          <RightSideBarLeague leagueData = {this.state}/>
        </div>
        <Footer />
      </div>
    )
  }
}
