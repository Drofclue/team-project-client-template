import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import CreateAGame from './components/createagame.js';
import CreateAGameLeague from './components/createagameleague.js';
import Findagame from './components/findagame.js';
import Template from './components/template.js';
import LeaguePage from './components/leaguepage.js';
<<<<<<< HEAD
import Schedule from './components/schedule.js';
=======
import MessagePage from './components/messagepage.js';
>>>>>>> 51f29bd660a0c2375e5ea7c28b248dd238978fb0
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
}else if (document.getElementById('schedule')!=null){
  ReactDOM.render(
    <Schedule />,
    document.getElementById('schedule')
  );
}
else if (document.getElementById('messagepage')!=null){
  ReactDOM.render(
    <MessagePage />,
    document.getElementById('messagepage')
  )
}
