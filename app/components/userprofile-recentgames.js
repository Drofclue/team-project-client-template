import React from 'react';
import UserProfileRecentGame from './userprofile-recentgames-game';

export default class UserProfileRecentGames extends React.Component {
  render(){
    return(
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel">
                        <div className="panel-heading recent-played-games">
                            <p className="userprofpic"> <b> Recently Played Games: </b> </p>
                        </div>
                        <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>
                                    <p className="center"> Date </p>
                                </th>
                                <th>
                                    <p className="center"> Location </p>
                                </th>
                                <th>
                                    <p className="center"> Sport </p>
                                </th>
                                <th>
                                    <p className="center"> League </p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <UserProfileRecentGame date="5/13/2017" city="Hadley" state="MA" sport="Water Polo" league="N/A"></UserProfileRecentGame>
                              <UserProfileRecentGame date="5/11/217" city="Boston" state="MA" sport="Muy Thai" league="Tuesday Fight Night"></UserProfileRecentGame>
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
