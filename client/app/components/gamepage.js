import React from 'react';
import GamePageData from './gamepage-data.js'
import {getGameData} from '../server.js'
import {readDocument} from '../database.js'

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props,gamedata:[]};
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
//    this.refresh();


    var data = readDocument('games', this.props.gameid);
    var contents;
    switch(true) {
      case true:
    // Create a StatusUpdate. Dynamically created React component: needs a key.
    // Keys only need to be unique among *siblings*, so we can re-use the
    // same key as the FeedItem.
    contents = (
     (<GamePageData gameName={data.gameName}league={data.league} leagueid = {data.leagueid} desc={data.description}
      sport={data.sport} location={data.location} skill={data.skillLvl} date={data.date} time={data.time} partnum={data.currPlayers}>
      </GamePageData>
      )
  ) ;
    break;
  default:
    null//window.alert("Search criteria needed...")
    ;
}
    return(
      <div>{contents}</div>
            /*
            <GamePageData gameName={this.state.gameName}league={this.state.league} leagueid = {this.state.leagueid} desc={this.state.description}
            sport={this.state.sport} location={this.state.location} skill={this.state.skillLvl} date={this.state.date} time={this.state.time} partnum={this.state.currPlayers}>
            </GamePageData>
            */
    )
  }
}
