import React from 'react';
import Fgresultitem  from './fgresultitem';
//import {giveGames} from './fgsearchbox';

export default class Fgresultlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {gamesForResults: []};

  }



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
