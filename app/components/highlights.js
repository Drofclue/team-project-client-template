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
componentDidMount() {
  getHighlightsData(this.props.user, (highlightsData) => {
    this.setState(highlightsData);
  });
}
  render(){
    return (
			<HighlightsItem />
    )
  }
}
