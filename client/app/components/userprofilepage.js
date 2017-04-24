import React from 'react';
import UserProfile from './userprofile.js';
import {getUserData} from '../server';

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state=props;
  }

  refresh() {
    getUserData(this.props.user, (userData) => {
      this.setState(userData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

  render(){
    return(
            <UserProfile userData={this.state}/>
    )
  }
}
