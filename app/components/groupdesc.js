import React from 'react';

export default class Groupdesc extends React.Component {
  render() {
    return (
      <div>
    <div className="col-md-6">
        <div className="container-fluid description">
          <h3><b>Group Description</b></h3>
          <div className="ActDesc">
          {this.props.children}
        </div>
    </div>
  </div>
</div>
    )
  }
}
