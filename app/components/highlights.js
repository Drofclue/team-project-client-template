import React from 'react';
import HighlightsItem from './highlightsitem.js'

export default class Highlights extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    contents: []
  };
}


  render() {
    return (
      <div>
        <div>
        {this.state.contents.map((highlightsItem) => {
            return (
              <HighlightsItem key={highlightsItem._id} user={this.props.user} data={this.state} />
            );
        })}
        </div>
      </div>
    )
  }
}
