import React from 'react';
import LeftNavBar from './leftnavbar.js';
import Footer from './footer';
import GamePageData from './gamepage-data.js'
import GamePageRightBar from './gamepage-rightbar.js'
import {getGameData} from '../server.js'

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state=props;
  }

  refresh() {
    getGameData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return(
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <div className="col-md-7 text-left">
            <GamePageData league={this.state.league} desc={this.state.description}
            sport={this.state.sport} location={this.state.location} skill={this.state.skillLvl} date={this.state.date} time={this.state.time} partnum={this.state.currPlayers}>
            </GamePageData>
          </div>
          <GamePageRightBar />
        </div>
        <Footer />
      </div>
    )
  }
}
