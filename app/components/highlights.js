import React from 'react';
import HighlightsItem from './highlightsitem.js'
import {getHighlightsData} from '../server';



export default class Highlights extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    contents: []
  };
}
refresh() {
    getHighlightsData(this.props.user, (highlightsData) => {
      this.setState(highlightsData);
    });
  }
componentDidMount() {
  this.refresh();
}
  render() {
    return (
      <div>
        <div>
        {this.state.contents.map((highlightsItem) => {
            return (
              <HighlightsItem key={highlightsItem._id} user={this.props.user} data={highlightsItem} />
            );
        })}
        </div>
      </div>
    )
  }
}
