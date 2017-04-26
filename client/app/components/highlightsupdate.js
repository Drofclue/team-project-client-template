import React from 'react';
import {unixTimeToString} from '../util';

export default class HighlightsUpdate extends React.Component{
  constructor(props) {
  super(props);
  this.state = this.props;
}
  render(){
    return(
      <div>
         <div className="panel panel-default highlightsupdate">
            <div className="panel-body post">
               <div className="row">
                  <div className="col-md-10">
                     <div className="media">
                        <div className="media-left media-top">
                           <span className="media-left media-top">
                           <img src={this.props.avatar} alt="avatar" className="img-circle" height="50" width="50"></img>
                           </span>
                        </div>
                        <div className="media-body">
                           <a href="#">{this.state.user.username}</a>
                           <br /> {unixTimeToString(this.state.timestamp)}·
                           <span className="glyphicon glyphicon-user"></span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     {this.props.message}
                  </div>
               </div>
            </div>
         </div>
      </div>
    )
  }
}
