import React from 'react';
import Leaguegame from './leaguegame';

export default class Leagueupcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    }
  render() {
    return (
      <div>
      <div className="row">
          <div className="col-md-12 upcoming-games">
              <div className="row">
                  <div className="col-md-4 upcoming-games-title">
                      Upcoming Games
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <ul className="media-list">
                        <li>  {this.props.games ? <Leaguegame adminnum = {this.props.adminnum} gametitle={this.props.games[0] ? this.props.games[0] : ""} date={this.props.dates[0] ? this.props.dates[0] : ""} time={this.props.times[0] ? this.props.times[0]
                             : ""} location ={this.props.locations[0] ? this.props.locations[0] : ""} team ={this.props.league ? this.props.league : ""}  />:""}                </li>

                           <li>  {this.props.games ? <Leaguegame adminnum = {this.props.adminnum}gametitle={this.props.games[1] ? this.props.games[1] : ""} date={this.props.dates[1] ? this.props.dates[1] : ""} time={this.props.times[1] ? this.props.times[1]
                                  : ""} location ={this.props.locations[1] ? this.props.locations[1] : ""} team ={this.props.league ? this.props.league : ""}  />:""}                </li>

                                <li>  {this.props.games ? <Leaguegame adminnum = {this.props.adminnum} gametitle={this.props.games[2] ? this.props.games[2] : ""} date={this.props.dates[2] ? this.props.dates[2] : ""} time={this.props.times[2] ? this.props.times[2]
                                       : ""} location ={this.props.locations[2] ? this.props.locations[2] : ""} team ={this.props.league ? this.props.league : ""}  />:""}                </li>

                                     <li>  {this.props.games ? <Leaguegame adminnum = {this.props.adminnum} gametitle={this.props.games[3] ? this.props.games[3] : ""} date={this.props.dates[3] ? this.props.dates[3] : ""} time={this.props.times[3] ? this.props.times[3]
                                            : ""} location ={this.props.locations[3] ? this.props.locations[3] : ""} team ={this.props.league ? this.props.league : ""}  />:""}                </li>

                                          <li>  {this.props.games ? <Leaguegame adminnum = {this.props.adminnum} gametitle={this.props.games[4] ? this.props.games[4] : ""} date={this.props.dates[4] ? this.props.dates[4] : ""} time={this.props.times[4] ? this.props.times[4]
                                                 : ""} location ={this.props.locations[4] ? this.props.locations[4] : ""} team ={this.props.league ? this.props.league : ""}  />:""}                </li>

   </ul>

                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
