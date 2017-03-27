import React from 'react';

export default class UserProfileProfilePic extends React.Component {
  render(){
    return(
      <div>
              <div className="container-fluid profilewidget">
                   <div className="row">
                       <div className="col-md-8">
                           <div className="well well-sm profile-box">
                               <div className="row">
                                   <div className="col-md-4">
                                       <img src= {this.props.propic} alt="" width="100%" className="img-rounded img-responsive profile-pic"/>
                                   </div>
                                   <div className="col-md-6">
                                       <span> <h1> {this.props.name} </h1> </span>
                                       <p className="userprofpic"> <b> Username: </b> <i> {this.props.username} </i> </p>
                                       <p className="userprofpic"> <b> Age: </b> <i> {this.props.age} </i> </p>
                                       <p className="userprofpic"> <b> Gender: </b> <i> {this.props.gender} </i> </p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
      </div>
    )
  }
}
