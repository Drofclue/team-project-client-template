import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import CreateAGame from './components/createagame.js';
import Findagame from './components/findagame.js';
import LeaguePage from './components/leaguepage.js';
import Schedule from './components/schedule.js';
import HighLightsPage from './components/highlightspage.js';
import UserProfilePage from './components/userprofilepage.js';
import GamePage from './components/gamepage.js'
import Origin from './pages/origin.js';

import { IndexRoute, Router, Route, hashHistory } from 'react-router' // eslint-disable-line no-unused-vars

class SettingsPage extends React.Component {
  render() {
    return (
      <p>This is the the settings page for user with ID {this.props.params.userid}.</p>
    );
  }
}

class LogoutPage extends React.Component {
  render() {
    return (
      <p>This is the logout page for user with ID {this.props.params.userid}.</p>
    )
  }
}

class GoToGame extends React.Component {
  render(){
    return <GamePage gameid={this.props.params.gameid}/>
  }
}

class GoToLeague extends React.Component {
  render(){
    return <LeaguePage league={this.props.params.leagueid}/>
  }
}

class GoToUser extends React.Component {
  render(){
    return <UserProfilePage user={this.props.params.userid}/>
  }
}

class GoToSchedule extends React.Component {
  render(){
    return <Schedule user={this.props.params.userid}/>
  }
}

class GoToCreateAGame extends React.Component {
  render(){
    return <CreateAGame user={this.props.params.userid}/>
  }
}

class App extends React.Component {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Origin}>
          <IndexRoute component={HighLightsPage}/>
          <Route path="settings/:userid" component={SettingsPage}/>
          <Route path="findagame" component={Findagame}/>
          <Route path="createagame/:userid" component={GoToCreateAGame}/>
          <Route path="game/:gameid" component={GoToGame}/>
          <Route path="league/:leagueid" component={GoToLeague}/>
          <Route path="user/:userid" component={GoToUser}/>
          <Route path="logout/:userid" component={LogoutPage}/>
          <Route path="schedule/:userid" component={GoToSchedule}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('template')
)
