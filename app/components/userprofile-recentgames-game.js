import React from 'react';

export default class UserProfileRecentGame extends React.Component {
  render(){
    return(  
        <tr>
            <td>{this.props.date}</td>
            <td>{this.props.city}, {this.props.state}</td>
            <td>{this.props.sport}</td>
            <td><a href="#">{this.props.league}</a></td>
        </tr>
    )
    }
}
