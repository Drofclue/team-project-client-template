import React from 'react';

export default class LeftNavBar extends React.Component {
  render(){
    return(
      <ul class="nav sidebar-nav">
        <li class="sidebar-brand">
          <a href="#"><h3>Cherry Picker</h3></a>
        </li>
        <div class="row">
          <p><img src="img/cherrypickericon_websize.png" usemap="#mymap" border="0" alt="logo" width="200px" height="200px" />
            <map name="mymap">
              <area shape="circle" coords="73,135,31 " href="#" >
              <area shape="circle" coords="140,130,31" href="#" >
            </map>
          </p>
        </div>
        <li>
          <a href="#"><i class="fa fa-fw fa-calendar" aria-hidden="true"></i>Schedule</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-fw fa-users"></i>Leagues</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-fw fa-envelope"></i> Messages</a>
        </li>
      </ul>
    )
  }
}
