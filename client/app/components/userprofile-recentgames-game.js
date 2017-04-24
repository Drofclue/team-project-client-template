import React from 'react';
import {Link} from 'react-router';
import {getGameData} from '../server';

export default class UserProfileRecentGame extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  refresh() {
    getGameData(this.props.gameID, (gameData) => {
      this.setState(gameData);
    });
  }

  componentDidMount() {
    this.refresh();
  }


  render(){
    return(
        <tr>
            <td>{this.state.date}</td>
            <td>{this.state.location}</td>
            <td>{this.state.sport}</td>
            <td><Link to ={"/league/"+ this.state.leagueid}>{this.state.league}</Link></td>
        </tr>
    )
    }
}
