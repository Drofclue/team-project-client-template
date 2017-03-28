import React from 'react';
import UserProfileProfilePic from './userprofile-profilepic.js'
import UserProfileSportsAndLeagues from './userprofile-sportsandleagues';
import UserProfileRecentGames from './userprofile-recentgames';

export default class UserProfile extends React.Component {
  render(){
    return (
      <div>
        <UserProfileProfilePic propic="img/lingodaddy_profile_pic.jpg" name="Lingo Daddy" username="Lingodaddy_24" age="59" gender="Helicopter">
        </UserProfileProfilePic>
        <UserProfileSportsAndLeagues></UserProfileSportsAndLeagues>
        <UserProfileRecentGames></UserProfileRecentGames>
      </div>
    )
  }
}
