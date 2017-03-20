import React from 'react';
import Leaguedes from './leaguedes';
import Leaguesports from './leaguesports'

export default class League extends React.Component {
  render() {
    return (
      <div className="media league-name">
          <div className="media-left">
              <img src="img/middle-aged-bowler.jpg" className="media-object" style={{"width" : "200px"}} />
          </div>
          <Leaguedes title="Middle Aged Bowlers" status="Open"
                        count="273">
          </Leaguedes>
          <div className="col-md-5">
          <h1 className="sportswe"><u>Sports We Play</u></h1>
          <div className= "sportsweplay">
          </div>
          </div>
          </div>
    )
  }
}
