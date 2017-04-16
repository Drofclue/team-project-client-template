import React from 'react';
import Leaguedes from './leaguedes';
import Leaguesports from './leaguesports';
import Leaguesport from './leaguesport';
import Groupdesc from './groupdesc';
import Leagueupcoming from './leagueupcoming';
import Leaguegame from './leaguegame';
export default class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    }



  render() {
    return (
      <div className="col-md-7 text-left">
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
          <Leagueupcoming>
                    <Leaguegame date ="Sunday February 28th" gametitle="Bowling" team= "Young Aged Bowlers" time= "7:00pm EST" location="Amherst Bowling Company" ></Leaguegame>
                    <Leaguegame date ="Saturday March 3rd" gametitle="Walking" team = "Young Aged Walkers" time= "4:00am EST" location="Umass Amherst Campus" ></Leaguegame>
                    <Leaguegame date ="Thursday April 4th" gametitle="Running" team = "No one (practice)" time= "5:00pm EST" location="Puffers Pond" ></Leaguegame>
                    <Leaguegame date ="Monday April 18th" gametitle="Running" team = "Young Aged Bowlers" time= "2:36am EST" location="Sylvan Walkway" ></Leaguegame>
                    <Leaguegame date ="Tuesday April 27th" gametitle="Bowling" team = "No one (practice)" time= "5:00pm EST" location="TBA" ></Leaguegame>
          </Leagueupcoming>
        </div>
        </div>
    )
  }
}
