import React from 'react';

export default class UserProfileLeague extends React.Component {
  render(){
    return(
      <tr>
          <td><a href="#">{this.props.league}</a></td>
      </tr>
    )
  }
}
