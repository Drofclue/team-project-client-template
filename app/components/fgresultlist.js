import React from 'react';
import Fgresultitem  from './fgresultitem';
//import {giveGames} from './fgsearchbox';

export default class Fgresultlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {gamesForResults: []};

  }

/*  outputResults() {
    var gamesOutput = giveGames;
    //this.setState({gamesForResults: []});
    for(var i = 0; i < gamesOutput.length; i++){
      var gameToAdd = gamesOutput[i]
      this.setState({gamesForResults: this.state.gamesForResults.concat(gameToAdd)});
    }
  }

*/

  render() {
    //this.outputResults();
    return (
          <div className="panel panel-default panel-results">
            {this.state.gamesForResults.map((game) => {
        return (
          <Fgresultitem gameName={game.gameName} sport={game.sport} discription={game.description} location={game.location} time={game.time} curPlayers={game.currPlayers}
            ></Fgresultitem>
        )
      })}
              </div>

    )
  }
}
