import React from 'react';
export default class SuggestedGamesItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = props;
  }
  
  render(){
    return(
      <li className="media">
          <div className="media-body">
              <div className="game-title">----<a href="#">{this.props.gamename}</a>----</div>
              <table>
                <tbody>
                  <tr>
                      <td className="title">League:</td>
                      <td className="description"><a href="#">{this.props.leaguename}</a></td>
                  </tr>
                  <tr>
                      <td className="title">Location:</td>
                      <td className="description">{this.props.location}</td>
                  </tr>
                  <tr>
                      <td className="title">Skill Level:</td>
                      <td className="description">{this.props.skilllvl}</td>
                  </tr>
                  <tr>
                      <td className="title">Date:</td>
                      <td className="description">{this.props.date}</td>
                  </tr>
                </tbody>
              </table>
              <div className="game-explanation">{this.props.explanation}.</div>
          </div>
      </li>
    )
  }
}
