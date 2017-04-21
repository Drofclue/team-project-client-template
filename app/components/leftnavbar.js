import React from 'react';
import ResetDatabase from '../database';
import {Link} from 'react-router';
export default class LeftNavBar extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }
  render() {
    return (
      <div className="col-md-2 sidenav">
      <ul className="nav sidebar-nav">
        <li className="sidebar-brand">
          <span className="cp"><Link to={"/highlights/"+this.props.userData.user}>Cherry Picker</Link></span>
        </li>
        <div className="row">
          <p> <img src="img/cherrypickericon_websize.png" useMap="#mymap" border="0" alt="logo" width="200px" height="200px" />
            <map name="mymap">
              <Link to={"/findagame/"+this.props.userData.user}><area shape="circle" coords="73,135,31 "/></Link>
              <area shape="circle" coords="140,130,31" href="createagame.html" />
            </map>
          </p>
        </div>
        <li>
          <Link to={"/schedule/"+this.props.userData.user}><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Schedule</Link>
        </li>
        <li role="presentation">DEBUG</li>
        <ResetDatabase />
      </ul>
    </div>
    )
  }
}
