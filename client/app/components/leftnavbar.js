import React from 'react';
import {ResetDatabase} from './resetdatabase';
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
          <span className="cp"><Link to={"/"}>Cherry Picker</Link></span>
        </li>
        <div className="row">
          <p> <img src="img/cherrypickericon_websize.png" useMap="#mymap" border="0" alt="logo" width="200px" height="200px" />
            <map name="mymap">
              <Link to={"findagame"}><area shape="circle" coords="73,135,31 "/></Link>
              <Link to={"createagame/"+this.state.userData._id}><area shape="circle" coords="140,130,31" /></Link>
            </map>
          </p>
        </div>
        <li>
          <Link to={"schedule"}><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Schedule</Link>
        </li>
        <li role="presentation">DEBUG</li>
        <ResetDatabase />
      </ul>
    </div>
    )
  }
}
