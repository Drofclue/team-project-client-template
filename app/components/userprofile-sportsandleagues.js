import React from 'react';
import UserProfileSport from './userprofile-sportsandleagues-sport';
import UserProfileLeague from './userprofile-sportsandleagues-league';

export default class UserProfileSportsAndLeagues extends React.Component {

  constructor(props){
    super(props);
    this.state=props;
  }

  render(){

    return(
      <div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-6">
                  <div className="container-fluid">
                      <div className="panel">
                          <table className="table table-striped sportwidget">
                              <thead>
                                <tr>
                                  <th>
                                      <p className="center"> Sport </p>
                                  </th>
                                  <th>
                                      <p className="center"> Skill Level </p>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.props.sports ? <UserProfileSport sport={this.props.sports[0]} skill={this.props.skillLvls[0]} />:null}
                                {this.props.sports ? <UserProfileSport sport={this.props.sports[1]} skill={this.props.skillLvls[1]}/>:null}
                                {this.props.sports ? <UserProfileSport sport={this.props.sports[2]} skill={this.props.skillLvls[2]}/>:null}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="container-fluid">
                      <div className="panel">
                          <table className="table table-striped league-table">
                              <thead>
                                <tr>
                                  <th>
                                      <p className="center"> Leagues </p>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                  {this.props.leagues ? <UserProfileLeague leagueID={this.props.leagues[0]}/>:null}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    )
  }
}
