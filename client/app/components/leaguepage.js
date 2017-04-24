import React from 'react';
import League from './league.js';
import {getLeagueData} from '../server';
import {readDocument} from '../database.js'


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
  render(){
    var data = readDocument('leagues', this.props.league);
    var contents;
    switch(true) {
      case true:
      contents =(
        <League leagueData= {data}/>
      )
    }
    return (
          <div>{contents}</div>
    )
  }
}
