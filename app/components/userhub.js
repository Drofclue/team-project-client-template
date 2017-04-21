import React from 'react';
import {Link} from 'react-router';

export default class UserHub extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  render(){
    return(
      <div className="panel panel-default user-hub">
          <div className="panel-body">
              <div className="row">
                  <div className="col-md-2 removepadding">
                      <div className="media">
                          <div className="media-body">
                              <img src={this.props.userhubprofpic} alt="" className="img-rounded img-responsive" />
                          </div>
                      </div>
                  </div>
                  <div className="col-md-10">
                      <p className="pull-left">Hello, <a href="userprofile.html">{this.props.username}</a></p>
                  </div>
              </div>
              <hr />
              <div className="row">
                  <div className="col-md-6">
                      <Link to={"/settings/"+1}><span className="pull-right"><i className="fa fa-fw fa-cog"></i>Settings</span></Link>
                  </div>
                  <div className="col-md-6 logout">
                      <a href="#"><span className= "pull-left"><i className="fa fa-fw fa-sign-out"></i>Logout</span></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
