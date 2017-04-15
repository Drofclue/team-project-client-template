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
        <UserProfileProfilePic propic="img/lingodaddy_profile_pic.jpg" name={this.props.userData.name} username={this.props.userData.username}age={this.props.userData.age} gender={this.props.userData.gender}>
        </UserProfileProfilePic>
        <UserProfileSportsAndLeagues sports={this.props.userData.sports} skillLvls={this.props.userData.skillLvl}></UserProfileSportsAndLeagues>
        <UserProfileRecentGames recentGames={this.props.userData.games} ></UserProfileRecentGames>
      </div>
    )
  }
}
