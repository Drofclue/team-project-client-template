import React from 'react';

export default class UserProfileSport extends React.Component {
  render(){
    return(
      <tr>
          <td>{this.props.sport}</td>
          <td>{this.props.skill}</td>
      </tr>
    )
  }
}
