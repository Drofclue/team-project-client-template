var token = 'eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSJ9'; // <-- Put your base64'd JSON token here

export function getUserData(user, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/user/' + user);
  xhr.addEventListener('load', function() {
  // Call the callback with the data.
  cb(JSON.parse(xhr.responseText));
});
xhr.send();
}



export function getGameData(game, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/game/' + game);
  xhr.addEventListener('load', function() {
  //Call the callback with the data.
  cb(JSON.parse(xhr.responseText));
});
xhr.send();
}

export function getLeagueData(league, cb) {
  sendXHR('GET', '/league/' + league, undefined, (xhr) => {
    // Return the new game.
    cb(JSON.parse(xhr.responseText));
  });
}

export function getHighlightsData(user, cb) {
  sendXHR('GET', '/user/000000000000000000000001/highlights', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
 }

export function postComment(highlightsItemId, user, contents, cb) {
  sendXHR('POST', '/highlightsitem/' + highlightsItemId + '/commentthread/', {
     "user" : user,
     "contents" : contents,
     "timestamp": new Date().getTime()
   }, (xhr) => {
  cb(JSON.parse(xhr.responseText))
  });
}

export function rsvpHighlightsItem(highlightsItemId, userId, cb) {
  sendXHR('PUT', '/highlightsitem/' + highlightsItemId + '/rsvplist/' + userId,
  undefined, (xhr) => {
  cb(JSON.parse(xhr.responseText));
  });
}

export function unrsvpHighlightsItem(highlightsItemId, userId, cb) {
sendXHR('DELETE', '/highlightsitem/' + highlightsItemId + '/rsvplist/' + userId,
undefined, (xhr) => {
cb(JSON.parse(xhr.responseText));
});
}


export function matchingGames(sportPassed, skillPassed, locPassed, cb) {
  sendXHR('GET', '/findagame/'+ sportPassed+ '/'+skillPassed+ '/'+ locPassed, undefined, (xhr) => {
    // Return the new game.
    cb(JSON.parse(xhr.responseText));
  });

  }


export function createGame(gameName, description, location, date, time, user, maxPlayers, minAge, maxAge, sport, skillLvl, league, cb) {
  sendXHR('POST', '/game', {
    gameName: gameName,
    description: description,
    location: location,
    date: date,
    time: time,
    currPlayers: [user],
    maxPlayers: maxPlayers,
    minAge: minAge,
    maxAge: maxAge,
    sport: sport,
    skillLvl: skillLvl,
    league: league
  }, (xhr) => {
    // Return the new game.
    cb(JSON.parse(xhr.responseText));
  });

}

/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
