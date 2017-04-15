import React from 'react';
import getLeagueData from '../server';

export default class UserProfileLeague extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  refresh() {
    getLeagueData(this.props.leagueID, (leagueData) => {
      this.setState(leagueData);
    });
  }

  componentDidMount() {
    this.refresh();
  }
  render(){
    return(
      <tr>
          <td><a href="#">{this.state.leagName}</a></td>
      </tr>
    )
  }
}
