import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import CreateAGame from './components/createagame.js';
import CreateAGameLeague from './components/createagameleague.js';
import Findagame from './components/findagame.js';
import Template from './components/template.js';
import LeaguePage from './components/leaguepage.js';
import Schedule from './components/schedule.js';
import MessagePage from './components/messagepage.js';
import HighLightsPage from './components/highlightspage.js';
import UserProfilePage from './components/userprofilepage.js';
import GamePage from './components/gamepage.js'

import { IndexRoute, Router, Route, browserHistory } from 'react-router' // eslint-disable-line no-unused-vars

class SettingsPage extends React.Component {
  render() {
    return (
      <p>This is the the settings page for user with ID {this.props.params.id}.</p>
    );
  }
}

class TemplatePage extends React.Component {
  render() {
    return <Template user={1} />;
  }
}

class SchedulePage extends React.Component {
  render(){
    return <Schedule user={1} />;
  }
}

class HighLightPage extends React.Component {
  render(){
    return (
      <HighLightsPage user={1}/>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

if (document.getElementById('leaguepage')!=null){
  ReactDOM.render(
    <LeaguePage league={1}/>,
    document.getElementById('leaguepage')
  );
}else if (document.getElementById('createagame')!=null){
  ReactDOM.render(
    <CreateAGame user={1} />,
    document.getElementById('createagame')
  );
}else if (document.getElementById('createagameleague')!=null){
  ReactDOM.render(
    <CreateAGameLeague user={1}/>,
    document.getElementById('createagameleague')
  );
}else if (document.getElementById('findagame')!=null){
  ReactDOM.render(
    <Findagame user={1}/>,
    document.getElementById('findagame')
  );
}else if (document.getElementById('template')!=null){
  ReactDOM.render(
    //<Template user={1} />
    (
    <Router history={browserHistory}>
      <Route path="/template.html" component={App}>
        <IndexRoute component={TemplatePage} />
        <Route path="/settings/:id" component={SettingsPage} />
        <Route path="/schedule/:id" component={SchedulePage} />
        <Route path="/highlights/:id" component={HighLightPage}/>
      </Route>
    </Router>
  ),document.getElementById('template')
  );
}else if (document.getElementById('schedule')!=null){
  ReactDOM.render(
    <Schedule user={1}/>,
    document.getElementById('schedule')
  );
}else if (document.getElementById('messagepage')!=null){
  ReactDOM.render(
    <MessagePage user={1}/>,
    document.getElementById('messagepage')
  )
}else if (document.getElementById('highlightspage')!=null){
  ReactDOM.render(
    <HighLightsPage user={1}/>,
    document.getElementById('highlightspage')
  )
}else if (document.getElementById('userprofilepage')!=null){
  ReactDOM.render(
    <UserProfilePage user={1}/>,
    document.getElementById('userprofilepage')
  );
}else if (document.getElementById('gamepage')!=null){
  ReactDOM.render(
    <GamePage user={1}/>,
    document.getElementById('gamepage')
  );
}
