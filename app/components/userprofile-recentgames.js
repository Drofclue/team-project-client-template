import React from 'react';
import UserProfileRecentGame from './userprofile-recentgames-game';

export default class UserProfileRecentGames extends React.Component {

  constructor(props){
    super(props);
    this.state=props;
  }

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
                              {this.props.games ? <UserProfileRecentGame gameID={this.props.games[0]} />:null}
                              {this.props.games ? <UserProfileRecentGame gameID={this.props.games[1]}/>:null}
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
