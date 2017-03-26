import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import League from './components/league.js';
import LeagueMemberListItem from './components/leaguememberlistitem.js';
import Findagame from './components/findagame.js';
import LeftNavBar from './components/leftnavbar.js'
import Footer from './components/footer.js'
import RightSideBar from './components/rightsidebar.js'
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
ReactDOM.render(
  <League />,
  document.getElementById('league')
)

ReactDOM.render(
  <LeagueMemberListItem />,
  document.getElementById('leaguememberlistitem')
)

ReactDOM.render(
  <Findagame />,
  document.getElementById('findagame')
)

ReactDOM.render(
  <LeftNavBar />,
  document.getElementById('leftnavbar')
)

ReactDOM.render(
  <Footer />,
  document.getElementById('foot')
)

ReactDOM.render(
  <RightSideBar />,
  document.getElementById('rightsidebar')
)
