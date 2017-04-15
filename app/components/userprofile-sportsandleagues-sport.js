import React from 'react';

export default class UserProfileSport extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }

  render(){
    return(
      <tr>
          <td>{this.props.sport}</td>
          <td>{this.props.skillLvl}</td>
      </tr>
    )
  }
}
