import React from 'react';
export default class LeftNavBar extends React.Component {
  render() {
    return (
      <div className="col-md-2 sidenav">
      <ul className="nav sidebar-nav">
        <li className="sidebar-brand">
          <span className="cp"><a href="#">Cherry Picker</a></span>
        </li>
        <div className="row">
          <p> <img src="img/cherrypickericon_websize.png" useMap="#mymap" border="0" alt="logo" width="200px" height="200px" />
            <map name="mymap">
              <area shape="circle" coords="73,135,31 " href="#" />
              <area shape="circle" coords="140,130,31" href="#" />
            </map>
          </p>
        </div>
        <li>
          <a href="#"><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Schedule</a>
        </li>
        <li>
          <a href="#"><i className="fa fa-fw fa-users"></i> Leagues</a>
        </li>
        <li>
          <a href="#"><i className="fa fa-fw fa-envelope"></i> Messages</a>
        </li>
        <li role="presentation">DEBUG</li>
        <li role="presentation" id="db-reset"></li>
      </ul>
    </div>
    )
  }
}
