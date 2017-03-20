import React from 'react';

export default class Groupdesc extends React.Component {
  render() {
    return (
          <div className="ActDesc">
          {this.props.children}
        </div>
    )
  }
}
