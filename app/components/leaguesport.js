import React from 'react';

export default class Leaguesport extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }
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
