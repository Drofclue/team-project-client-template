import React from 'react';
import {getGameData} from '../server';
import {Link} from 'react-router';
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
              <div className="game-title">----<Link to={"/game/"+this.state._id}>{this.state.gameName}</Link>----</div>
              <table>
                <tbody>
                  <tr>
                      <td className="title">League:</td>
                      <td className="descriptionrb"><Link to={"/league/"+this.state.leagueid}>{this.state.league}</Link></td>
                  </tr>
                  <tr>
                      <td className="title">Location:</td>
                      <td className="descriptionrb">{this.state.location}</td>
                  </tr>
                  <tr>
                      <td className="title">Skill Level:</td>
                      <td className="descriptionrb">{this.state.skillLvl}</td>
                  </tr>
                  <tr>
                      <td className="title">Date:</td>
                      <td className="descriptionrb">{this.state.time} {this.state.date}</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </li>
    )
  }
}
