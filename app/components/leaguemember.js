import React from 'react';

export default class LeagueMember extends React.Component {
  render() {
    return (
      <div>
        <div className="media-top media-left">
            PIC
        </div>
        <div className="media-body">
            <a href="#">{this.props.name}</a>
        </div>
      </div>
    )
  }
}
