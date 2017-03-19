import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import League from './components/league.js'
// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.

  ReactDOM.render(
    <League />,
    document.getElementById('league')
  )
