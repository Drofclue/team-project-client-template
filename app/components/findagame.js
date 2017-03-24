import React from 'react';
import Fgresultlist from './fgresultlist';
import Fgsearchbox from './fgsearchbox'


export class Findagame extends React.Component {
  render() {
    return (
      <div>
        <p><h2>Find a Game</h2></p>
        <Fgsearchbox></Fgsearchbox>
        <Fgresultlist></Fgresultlist>
      </div>
    );
    }
  }
