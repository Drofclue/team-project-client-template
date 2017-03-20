import React from 'react';

export default class Leaguesport extends React.Component {
  render() {
    return (
      <div>
        <div className= "sportsweplay">
          <p>
            {this.props.sport} <span className="label label-default">{this.props.skill}</span>
            </p>
      </div>
    </div>
    )
  }
}
