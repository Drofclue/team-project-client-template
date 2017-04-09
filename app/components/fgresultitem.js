import React from 'react';
import expandFgResult from './server.js';


export default class Fgresultitem extends React.Component {
  constructor(props){
    super(props);
    this.state = props;
  }

/*   Attempt to create a function to handle when someone clicks on a findagame result item.
     which would make the result item listing expand, and display additional imformation about the game.
*/

  handleResultClick(clickEvent) {
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

    /*
      - Function which handles when a result item has been clicked, which changes/flips the collapse value

     */
    return (
        <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id={this.headerid}>
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion" href={'#'+this.props.collapseid} aria-expanded="true" aria-controls="collapseOne">
                      {this.props.gamename} </a>
                    </h5>
                </div>
                <div id={this.props.collapseid} className="collapse" role="tabpanel" aria-labelledby={this.headerid}>
                    <div className="card-block card-results">
                        <b>{this.props.gamename}</b>
                        <div className="card-block card-results ">
                                <div className="block">
                                    <span className="label label-default-cherry">Sport</span>: {this.props.sport}
                                </div>
                                <div className="block">
                                    <span className="label label-default-cherry">Location</span>: {this.props.location}
                                </div>
                                <div className="block">
                                    <span className="label label-default-cherry">Time</span>: {this.props.time}
                                </div>
                                <div className="block">
                                    <span className="label label-default-cherry"># of Players</span>:{this.props.curplayers} of {this.props.maxplayers}
                                </div>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    )
  }
}
