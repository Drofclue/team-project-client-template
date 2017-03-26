import React from 'react';
import UserHub from './userhub';
import LeagueMemberListItem from './leaguememberlistItem';
export default class RightSideBarLeague extends React.Component{
  render(){
    return(
          <div className="col-md-3 right-bar">
            <UserHub username="LingoDaddy_24" userhubprofpic="img/lingodaddy_profile_pic_userhub.jpg" />
            <LeagueMemberListItem />
          </div>
    )
  }
}
