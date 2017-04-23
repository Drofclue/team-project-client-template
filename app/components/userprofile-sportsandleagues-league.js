import React from 'react';
import {Link} from 'react-router';
import {getLeagueData} from '../server';

export default class UserProfileLeague extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  refresh() {
    getLeagueData(this.props.league, (leagueData) => {
      this.setState(leagueData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return(
      <tr>
          <td><Link to ={"/league/"+ this.state._id}>{this.state.leagName}</Link></td>
      </tr>
    )
  }
}
