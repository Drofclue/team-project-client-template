import React from 'react';
import UserProfileProfilePic from './userprofile-profilepic.js'
import UserProfileSportsAndLeagues from './userprofile-sportsandleagues';
import UserProfileRecentGames from './userprofile-recentgames';

export default class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  render(){
    return (
      <div>
        <UserProfileProfilePic propic="img/lingodaddy_profile_pic.jpg" name={this.props.name} username={this.props.username}age={this.props.age} gender={this.props.gender}>
        </UserProfileProfilePic>
        <UserProfileSportsAndLeagues></UserProfileSportsAndLeagues>
        <UserProfileRecentGames></UserProfileRecentGames>
      </div>
    )
  }
}
