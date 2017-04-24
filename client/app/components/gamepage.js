import React from 'react';
import GamePageData from './gamepage-data.js'
import {getGameData} from '../server.js'

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state=props;
  }

  refresh() {
    getGameData(this.props.gameid, (gameData) => {
      this.setState(gameData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return(
            <GamePageData gameName={this.state.gameName}league={this.state.league} leagueid = {this.state.leagueid} desc={this.state.description}
            sport={this.state.sport} location={this.state.location} skill={this.state.skillLvl} date={this.state.date} time={this.state.time} partnum={this.state.currPlayers}>
            </GamePageData>
    )
  }
}
