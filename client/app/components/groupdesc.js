import React from 'react';

export default class Groupdesc extends React.Component {
  constructor(props){
    super(props);
    this.state=props;
  }
  render() {
    return (
          <div className="ActDesc">
          {this.props.children}
        </div>
    )
  }
}
