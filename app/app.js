import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import League from './components/league.js'
import LeagueMemberList from './components/leaguememberlist.js'
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.

  ReactDOM.render(
    <League />,
    document.getElementById('league')
  )

ReactDOM.render(
  <LeagueMemberList />,
  document.getElementById('leaguememberlist')
)
