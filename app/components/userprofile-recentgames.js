import React from 'react';

export default class UserProfileRecentGames extends React.Component {
  render(){
    return(
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel">
                        <div className="panel-heading recent-played-games">
                            <p style="text-align:left;"> <b> Recently Played Games: </b> </p>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <th>
                                    <p style="text-align:center;"> Date </p>
                                </th>
                                <th>
                                    <p style="text-align:center;"> Location </p>
                                </th>
                                <th>
                                    <p style="text-align:center;"> Sport </p>
                                </th>
                                <th>
                                    <p style="text-align:center;"> League </p>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5/13/2017</td>
                                    <td>Hadley, MA</td>
                                    <td>Water Polo</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>5/11/2017</td>
                                    <td>Boston, MA</td>
                                    <td>Muy Thai</td>
                                    <td><a href="#">Tuesday Fight Night</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
