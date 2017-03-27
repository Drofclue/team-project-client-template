import React from 'react';
import Fgresultitem from './fgresultitem';

export default class Fgresultlist extends React.Component {
  render() {
    return (
      <div className="collapse" id="find-results">
          <div className="panel panel-default panel-results">
              <Fgresultitem gamename= "Daryl's Dodgeball" sport="Dodgeball" location="Field of dreams"
                time="High-Noon" maxplayers="20" curplayers="10" headerid="1" collapseid="1" >
              </Fgresultitem>
              <Fgresultitem gamename="Coop's Hoops" sport="Basketball" location="Supreme Court"
                time="11 am" maxplayers="16" curplayers="14" headerid="2" collapseid="2">
              </Fgresultitem>
              <Fgresultitem gamename="Tennis with Teri" sport="Tennis" location="Wimble-done"
                time="5am" maxplayers="2" curplayers="1" headerid="3" collapseid="3">
              </Fgresultitem>
              </div>
          </div>
    )
  }
}
