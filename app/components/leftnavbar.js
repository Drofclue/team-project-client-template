import React from 'react';
import ResetDatabase from '../database';
export default class LeftNavBar extends React.Component {
  render() {
    return (
      <div className="col-md-2 sidenav">
      <ul className="nav sidebar-nav">
        <li className="sidebar-brand">
          <span className="cp"><a href="highlights.html">Cherry Picker</a></span>
        </li>
        <div className="row">
          <p> <img src="img/cherrypickericon_websize.png" useMap="#mymap" border="0" alt="logo" width="200px" height="200px" />
            <map name="mymap">
              <area shape="circle" coords="73,135,31 " href="findagame.html" />
              <area shape="circle" coords="140,130,31" href="createagame.html" />
            </map>
          </p>
        </div>
        <li>
          <a href="#"><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Schedule</a>
        </li>
        <li role="presentation">DEBUG</li>
        <ResetDatabase />
      </ul>
    </div>
    )
  }
}
