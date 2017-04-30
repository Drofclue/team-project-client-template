import React from 'react';
//import {getUserData} from '../server';



export default class Fgresultitem extends React.Component {
  constructor(props){
    super(props); // These are the properties from fgresultlist
    this.state = {props};
  }


  render() {
    return (

                        <div className="card-block card-results ">
                                <div className="block">
                                    <span className="label label-default-cherry">Sport</span>: {this.props.sport}
                                </div>
                                <div className="block">
                                  <span className="label label-default-cherry">Description</span>: {this.props.description}
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
                
    )
  }
}
