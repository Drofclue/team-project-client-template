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
    // Send to server.
    // We could use geolocation to get a location, but let's fix it to Amherst
    // for now.
    createGame(gameName, description, location, date, time, 1, maxPlayers, minAge, maxAge, sport, skillLvl, league, () => {
      // Database is now updated. Redirect to the game page.
      window.alert("Database has been updated!");
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
