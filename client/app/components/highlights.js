import React from 'react';
import HighlightsItem from './highlightsitem.js';
import {getHighlightsData} from '../server';
import {postStatusUpdate} from '../server';


export default class Highlights extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    contents: []
  };
}

refresh() {
  getHighlightsData(this.props.data._id, (highlightsData) => {
    this.setState(highlightsData);
  });
}

onPost(postContents) {
    // Send to server.
    // We could use geolocation to get a location, but let's fix it to Amherst
    // for now.
    postStatusUpdate(4, "Amherst, MA", postContents, () => {
      // Database is now updated. Refresh the feed.
      this.refresh();
    });
  }

componentDidMount() {
  this.refresh();
}


  render() {
    if (this.state.contents.length > 0)
    {
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
    else {
      return (<div>test</div>)
    }
  }
}
