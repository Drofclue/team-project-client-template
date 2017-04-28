import React from 'react';
import UserProfile from './userprofile.js';
import {getUserData} from '../server';

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state={props,userdata:{}};
  }

  refresh() {
    getUserData(this.props.user, (userData) => {
      this.setState({userdata: userData});
    });
  }

  componentDidMount() {
    this.refresh();
  }

  componentDidUpdate(preProps) {
    if(preProps.user !== this.props.user){this.refresh();}
  }


  render(){
    return(
            <UserProfile userData={this.state.userdata}/>
    )
  }
}
