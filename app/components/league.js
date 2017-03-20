import React from 'react';
import Leaguedes from './leaguedes';
import Leaguesports from './leaguesports';
import Leaguesport from './leaguesport';
import Groupdesc from './groupdesc';
import Leagueupcoming from './leagueupcoming';
import Leaguegame from './leaguegame';
export default class League extends React.Component {
  render() {
    return (
      <div className="media league-name">
          <Leaguedes title="Middle Aged Bowlers" status="Open"
                        count="273"  image ="img/middle-aged-bowler.jpg">
          </Leaguedes>
          <div className="col-md-5">
          <h1 className="sportswe"><u>Sports We Play</u></h1>
          <div className= "sportsweplay">
          <Leaguesports>
          <Leaguesport sport ="Bowling" skill = "Advanced"></Leaguesport>
          <Leaguesport sport ="Walking" skill = "Beginner-Novice"></Leaguesport>
          <Leaguesport sport ="Running" skill = "Intermediate"></Leaguesport>
          <Leaguesport sport ="Hockey" skill = "Advanced"></Leaguesport>
          <Leaguesport sport ="Frisbee" skill = "Beginner"></Leaguesport>
          </Leaguesports>
          </div>
          </div>
        <div className="col-md-6">
            <div className="container-fluid description">
              <h3><b>Group Description</b></h3>
              <Groupdesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum, sem nec gravida cursus, mi mi eleifend eros, ullamcorper molestie quam nisi at diam. Integer ligula felis, consequat in orci sed, fringilla ultricies purus. Donec vehicula, felis nec varius faucibus, arcu augue vulputate augue, sit amet fringilla sem orci cursus elit. Nullam eu lacinia eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum, sem nec gravida cursus, mi mi eleifend eros, ullamcorper molestie quam nisi at diam. Integer ligula felis, consequat in orci sed, fringilla ultricies purus. Donec vehicula, felis nec varius faucibus, arcu augue vulputate augue, sit amet fringilla sem orci cursus elit. Nullam eu lacinia eros.
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
    )
  }
}
