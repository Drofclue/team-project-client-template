import React from 'react';
import {getGameData} from '../server';
export default class SuggestedGamesItem extends React.Component{
  constructor(props){
    super(props);
    this.state=props;
  }

  refresh() {
    getGameData(this.props.gameId, (gameData) => {
      this.setState(gameData);
    });
  }

  componentDidMount() {
    this.refresh();
  }
  render(){
    return(
      <li className="media">
          <div className="media-body">
              <div className="game-title">----<a href="#">{this.state.gameName}</a>----</div>
              <table>
                <tbody>
                  <tr>
                      <td className="title">League:</td>
                      <td className="description"><a href="#">{this.state.league}</a></td>
                  </tr>
                  <tr>
                      <td className="title">Location:</td>
                      <td className="description">{this.state.location}</td>
                  </tr>
                  <tr>
                      <td className="title">Skill Level:</td>
                      <td className="description">{this.state.skillLvl}</td>
                  </tr>
                  <tr>
                      <td className="title">Date:</td>
                      <td className="description">{this.state.time} {this.state.date}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </li>
    )
  }
}
