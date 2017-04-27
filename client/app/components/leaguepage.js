import React from 'react';
import League from './league.js';
import {getLeagueData} from '../server';



export default class LeaguePage extends React.Component {
  constructor(props) {
    super(props);
    this.state=props;
    userContents : []
  }
  refresh() {
    getLeagueData(this.props.league, (leagueData) => {
      this.setState(leagueData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  componentDidUpdate(preProps) {
    if(preProps.league !== this.props.league){this.refresh();}
  }

  render(){


    return (
          <League leagueData ={this.state}/>
    )
  }
}
