import React from 'react';
import UserHub from './userhub';
import SuggestedGames from './SuggestedGames';

export default class RightSideBar extends React.Component{
  constructor(props){
    super(props);
    this.state=props;
  }
  render(){
    return(
          <div className="col-md-3 right-bar">
            <UserHub username={this.props.userData.username} userhubprofpic="img/lingodaddy_profile_pic_userhub.jpg" />
            <SuggestedGames suggestedgames={this.props.userData.suggestedgames}/>
          </div>
    )
  }
}
