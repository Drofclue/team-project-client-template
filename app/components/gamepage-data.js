import React from 'react';
import {Link} from 'react-router';

export default class GamePageData extends React.Component {
  render(){
    return(
      <div>
      <div className="container-fluid">
        <div className="row">
          <div className="panel">
            <table className = "table">
              <thead>
                <tr>
                <th><a href="#"><h1>{this.props.league}</h1></a></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h5>{this.props.desc}</h5></td>
                </tr>
                <tr>
                  <td><h3><b>Sport: </b>{this.props.sport}</h3></td>
                </tr>
                <tr>
                  <td><h3><b>League: </b><Link to ={"/league/"+ this.props.leagueid}>{this.props.league}</Link></h3></td>
                </tr>
                <tr>
                  <td><h3><b>Location: </b>{this.props.location}</h3></td>
                </tr>
                <tr>
                  <td><h3><b>Skill Level: </b>{this.props.skill}</h3></td>
                </tr>
                <tr>
                  <td><h3><b>Date: </b>{this.props.date}</h3></td>
                </tr>
                <tr>
                  <td><h3><b>Time: </b>{this.props.time}</h3></td>
                </tr>
                <tr>
                <td><h3><b>Participants: </b>{this.props.partnum}</h3></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" className="btn btn-default" aria-label="Left Align">
            <span aria-hidden="true">Join Game</span>
          </button>
        </div>
      </div>
      </div>
    )
  }
}
