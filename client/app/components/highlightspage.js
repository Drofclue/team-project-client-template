import React from 'react';
import Highlights from './highlights'
import {getUserData} from '../server';

export default class HighLightsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  refresh() {
    getUserData("000000000000000000000001", (userData) => {
      this.setState({user: userData});
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return (
      <div>
        {(this.state !== null) ? <Highlights data={this.state.user}/> : null }
      </div>
    )
  }
}
