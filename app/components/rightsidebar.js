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
            <UserHub username={this.props.userData.username} userhubprofpic={this.props.userData.profilepicture} userid={this.props.userData._id}/>
            <SuggestedGames userID={this.state.userData.user}/>
          </div>
    )
  }
}
