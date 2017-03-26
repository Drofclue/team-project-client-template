import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import League from './components/league.js';
import LeagueMemberListItem from './components/leaguememberlistitem.js';
import Findagame from './components/findagame.js';
import Template from "./components/template.js";
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('league')!=null){
  ReactDOM.render(
    <League />,
    document.getElementById('league')
  );
}else if (document.getElementById('leaguememberlistitem')!=null){
  ReactDOM.render(
    <LeagueMemberListItem />,
    document.getElementById('leaguememberlistitem')
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
}
