import React from 'react';
import Leaguedes from './leaguedes';
import Leaguesports from './leaguesports';
import Groupdesc from './groupdesc';
import Leagueupcoming from './leagueupcoming';
export default class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    }



  render() {
    return (
      <div className="media league-name">
          <Leaguedes title={this.props.leagueData.leagName} status={this.props.leagueData.status}
                        count={this.props.leagueData.memCount}  image ="img/middle-aged-bowler.jpg">
          </Leaguedes>
          <div className="col-md-5">
          <h1 className="sportswe"><u>Sports We Play</u></h1>
          <div className= "sportsweplay">
          <Leaguesports sports= {this.props.leagueData.sports} skills = {this.props.leagueData.skill}>
          </Leaguesports>
          </div>
          </div>
        <div className="col-md-6">
            <div className="container-fluid description">
              <h3><b>Group Description</b></h3>
              <Groupdesc>
                {this.props.leagueData.description}
              </Groupdesc>
            </div>
          </div>
          <Leagueupcoming games = {this.props.leagueData.games} dates = {this.props.leagueData.dates} times = {this.props.leagueData.times} locations = {this.props.leagueData.locations} league = {this.props.leagueData.leagName}>
          </Leagueupcoming>
        </div>
    )
  }
}
