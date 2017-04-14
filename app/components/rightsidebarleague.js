import React from 'react';
import UserHub from './userhub';
import LeagueMemberListItem from './leaguememberlistItem';
export default class RightSideBarLeague extends React.Component{
  constructor(props) {
    super(props);
    this.state = props
  }
  render(){
    return(
          <div className="col-md-3 right-bar">
            <UserHub username= {this.props.leagueData.currentUsername} userhubprofpic="img/lingodaddy_profile_pic_userhub.jpg" />
            <LeagueMemberListItem />
          </div>
    )
  }
}
