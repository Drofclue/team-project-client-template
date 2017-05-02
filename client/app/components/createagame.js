  import React from 'react';
  import CreateAGameBasic from './createagamebasic';
  import {createGame} from '../server';
  import {getUserData} from '../server';

  export default class CreateAGame extends React.Component {
    constructor(props){
      super(props);
      this.state=props;
    }
    refresh() {
      getUserData(this.props.user, (userData) => {
        this.setState(userData);
      });
    }

    componentDidMount() {
      this.refresh();
    }

    onSubmit(gameName, description, location, date, time, maxPlayers, minAge, maxAge, sport, skillLvl, league) {
      createGame(gameName, description, location, date, time, "000000000000000000000001", maxPlayers, minAge, maxAge, sport, skillLvl, league, (result) => {
        // Database is now updated. Redirect to the game page.
        //window.alert("Database has been updated!");
        window.location.replace("#/game/" + result._id);
      });
    }
    render(){
      return (
        <div>
              <h2>Create a Game</h2>
                <div className="panel panel-default">
                 <div className="panel-body">
                  <CreateAGameBasic onSubmit={(gameName, description, location, date, time, maxPlayers, minAge, maxAge, sport, skillLvl, league) => this.onSubmit(gameName, description, location, date, time, maxPlayers, minAge, maxAge, sport, skillLvl, league)} />
                  </div>
                </div>
        </div>
      )
    }
  }
