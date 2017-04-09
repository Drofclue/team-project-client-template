import React from 'react';
import UserProfileSport from './userprofile-sportsandleagues-sport';
import UserProfileLeague from './userprofile-sportsandleagues-league';

export default class UserProfileSportsAndLeagues extends React.Component {
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
                                <UserProfileSport sport="Bowling" skill="Advanced"></UserProfileSport>
                                <UserProfileSport sport="Water Polo" skill="Novice"></UserProfileSport>
                                <UserProfileSport sport="Muy Thai" skill="Intermediate"></UserProfileSport>
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
                                  <UserProfileLeague league="Middle-Aged Bowling"></UserProfileLeague>
                                  <UserProfileLeague league="We Play Polo"></UserProfileLeague>
                                  <UserProfileLeague league="Tuesday Fight Night"></UserProfileLeague>
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
