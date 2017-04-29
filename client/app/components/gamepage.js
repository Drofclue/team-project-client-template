import React from 'react';
import GamePageData from './gamepage-data.js'
import {getGameData} from '../server.js'


export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props,gamedata:{}};
  }


  refresh() {
    getGameData(this.props.gameid, (gameData) => {
      this.setState({gamedata: gameData});
      //location.reload();
    });
  }

  componentDidMount() {
    this.refresh();
  
  }

  componentDidUpdate(preProps) {
    if(preProps.gameid !== this.props.gameid){this.refresh();}
  }



    render()
      {
        return(
                <GamePageData gameName={this.state.gamedata.gameName}league={this.state.gamedata.league} leagueid = {this.state.gamedata.leagueid} desc={this.state.gamedata.description}
                 sport={this.state.gamedata.sport} location={this.state.gamedata.location} skill={this.state.gamedata.skillLvl} date={this.state.gamedata.date} time={this.state.gamedata.time} partnum={this.state.gamedata.currPlayers}>
                 </GamePageData>
               )
      }

}
