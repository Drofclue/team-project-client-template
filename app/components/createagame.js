import React from 'react';
import CreateAGameBasic from './createagamebasic';

export class CreateAGame extends React.Component {
  render() {
    return (
      <div>
      <p><h2>Create a Game</h2></p>
        <div className="panel panel-default">
         <div className="panel-body">
          <CreateAGameBasic />
          <button type="submit" className="btn pull-right">Submit</button>
          </div>
        </div>
      </div>
    );
    }
  }
