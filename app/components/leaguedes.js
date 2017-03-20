import React from 'react';

export default class Leaguedes extends React.Component {
  render() {
    return (
      <div>
      <div className="media-left">
          <img src={this.props.image} className="media-object" style={{"width" : "200px"}} />
      </div>
          <div className="media-body">
              <h1 className="media-heading">{this.props.title}
  <button type="button pull-right" className="btn btn-success">{this.props.status}</button> </h1>
              <h3 className="media-heading member-count">{this.props.count} Members</h3>
          </div>
          </div>
    )
  }
}
