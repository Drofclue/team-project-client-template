import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import CreateAGame from './components/createagame.js';
import CreateAGameLeague from './components/createagameleague.js';
import Findagame from './components/findagame.js';
import Template from './components/template.js';
import LeaguePage from './components/leaguepage.js';
import Message from './message.js'
import Highlights from './highlights.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('leaguepage')!=null){
  ReactDOM.render(
    <LeaguePage />,
    document.getElementById('leaguepage')
  );
}else if (document.getElementById('createagame')!=null){
  ReactDOM.render(
    <CreateAGame />,
    document.getElementById('createagame')
  );
}else if (document.getElementById('createagameleague')!=null){
  ReactDOM.render(
    <CreateAGameLeague />,
    document.getElementById('createagameleague')
  );
}else if (document.getElementById('findagame')!=null){
  ReactDOM.render(
    <Findagame />,
    document.getElementById('findagame')
  );
}else if (document.getElementById('template')!=null){
  ReactDOM.render(
    <Template />,
    document.getElementById('template')
  );
}else if (document.getElementById('message')!=null){
  ReactDOM.render(
    <Message />,
    document.getElementById('message')
  );
}else if (document.getElementById('highlights')!=null){
  ReactDOM.render(
    <Highlights />,
    document.getElementById('highlights')
  );
}
