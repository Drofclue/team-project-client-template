import React from 'react';
import UserHub from './userhub';
import Participants from './gamepage-rightbar-participants';

export default class GamePageRightBar extends React.Component{
  render(){
    return(
          <div className="col-md-3 right-bar">
            <UserHub username="LingoDaddy_24" userhubprofpic="img/lingodaddy_profile_pic_userhub.jpg" />
            <Participants />
          </div>
    )
  }
}
