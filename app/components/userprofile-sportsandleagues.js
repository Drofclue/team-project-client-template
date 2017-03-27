import React from 'react';

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
                                  <tr>
                                      <td>Bowling</td>
                                      <td>Advanced</td>
                                  </tr>
                                  <tr>
                                      <td>Water Polo</td>
                                      <td>Novice</td>
                                  </tr>
                                  <tr>
                                      <td>Muy Thai</td>
                                      <td>Intermediate</td>
                                  </tr>
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
                                  <tr>
                                      <td><a href="#">Middle-Aged Bowling</a></td>
                                  </tr>
                                  <tr>
                                      <td><a href="#">We Play Polo</a></td>
                                  </tr>
                                  <tr>
                                      <td><a href="#">Tuesday Fight Night</a></td>
                                  </tr>
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
