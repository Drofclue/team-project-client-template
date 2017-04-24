  import React from 'react';
  //import Fgresultlist from './fgresultlist.js';
  import Fgsearchbox from './fgsearchbox.js';



  export default class Findagame extends React.Component {
    constructor(props){
      super(props)
      this.state = props;
    }


    render(){
      return (
        <div>
          <h2>Find a Game</h2>
          <Fgsearchbox></Fgsearchbox>

        </div>
      )
    }
  }
