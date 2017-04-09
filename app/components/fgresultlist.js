import React from 'react';
import expandFgResult from './server.js';
import Fgresultitem from './fgresultitem';

export default class Fgresultlist extends React.Component {
  constructor(props){
    super(props);
  }
  handleSubmitClick(clickEvent) {
    clickEvent.preventDefault();
      // 0 represents the 'main mouse button' -- typically a left click
    if(clickEvent.button === 0) {
        //callbackFfunction is the cb argument for unlike & Like comment.
      var callbackFunction = (expandCond) => {
      this.setState({expandVal: expandCond })
      };

      if(this.isExpanded()){
      collapseResult(this.state._id,this.state.expandVal, callbackFunction)
      }
      else{
        expandResult(this.state._id, this.state.expandVal, callbackFunction)
      }
    }
  }


  expandResult(){
    this.setState({expandVal: true});
  }

  collapseResult(){
    this.setState({expandVal: false});
  }

  isExpanded() {
    var expandStatus = this.state.expandVal;
    var expanded = false;
    if(expandStatus === true){
      expanded = true;
      break;
    }
    return expanded;
  }

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
