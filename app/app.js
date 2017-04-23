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
      <p>This is the the settings page for user with ID {this.props.params.id}.</p>
    );
  }
}

class LogoutPage extends React.Component {
  render() {
    return (
      <p>This is the logout page for user with ID {this.props.params.id}.</p>
    )
  }
}

class GoToGame extends React.Component {
  render(){
    return <GamePage gameid={this.props.params.id}/>
  }
}

class GoToLeague extends React.Component {
  render(){
    return <LeaguePage league={this.props.params.id}/>
  }
}

class GoToUser extends React.Component {
  render(){
    return <UserProfilePage user={this.props.params.id}/>
  }
}

class GoToSchedule extends React.Component {
  render(){
    return <Schedule user={this.props.params.id}/>
  }
}

class App extends React.Component {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Origin}>
          <IndexRoute/>
          <Route path="settings/:id" component={SettingsPage}/>
          <Route path="findagame" component={Findagame}/>
          <Route path="createagame/:id" component={CreateAGame}/>
          <Route path="game/:id" component={GoToGame}/>
          <Route path="league/:id" component={GoToLeague}/>
          <Route path="user/:id" component={GoToUser}/>
          <Route path="logout/:id" component={LogoutPage}/>
          <Route path="schedule/:id" component={GoToSchedule}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('template')
)
/**
if (document.getElementById('leaguepage')!=null){
  ReactDOM.render(
    <LeaguePage league={1}/>,
    document.getElementById('leaguepage')
  );
}
}
}else if (document.getElementById('schedule')!=null){
  ReactDOM.render(
    <Schedule user={1}/>,
    document.getElementById('schedule')
  );
}
}else if (document.getElementById('highlightspage')!=null){
  ReactDOM.render(
    <HighLightsPage user={1}/>,
    document.getElementById('highlightspage')
  )
*/
