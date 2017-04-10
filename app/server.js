import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */

function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getUserData(user, cb) {
  var userData = readDocument('users', user);
  emulateServerReturn(userData, cb);
}

/**
 * Expand the resultItem by changing the state of the expandVal
 * Provides an updated expandVal in the response.
 */
export function expandFgResult(fgResultId, expandVal, cb) {
  var resultItem = readDocument('fgResultList', fgResultId);
  resultItem.expandResult;
  writeDocument('fgResultList', resultItem);
  // Return a resolved version of the likeCounter
  emulateServerReturn(resultItem.expandVal, cb);
}

/**
 * Compress the resultItem by changing the state of the expandVal
 * Provides an updated expandVal in the response.
 */
export function compressFgResult(fgResultId, expandVal, cb) {

  var resultItem = readDocument('fgResultList', fgResultId);
  // Find the array index that contains the user's ID.
  // (We didn't *resolve* the FeedItem object, so it is just an array of user IDs)
  var expandStatus = resultItem.expandVal;
  // -1 means the user is *not* in the likeCounter, so we can simply avoid updating
  // anything if that is the case: the user already doesn't like the item.
  if (expandStatus === true) {
    // calls the expandResult Function defined in fgresultitem
    resultItem.collapseResult;
    writeDocument('fgResultList', resultItem);
  }
  // Return a resolved version of the likeCounter

  // Don't know how this emulate server return works, so not sure how to fit it in with our use needs
  emulateServerReturn(resultItem.expandVal, cb);
}

export function createGame(gameName, description, location, date, time, user, maxPlayers, minAge, maxAge, sport, skillLvl, league) {
  var newGame = {
    "gameName": gameName,
    "description": description,
    "location": location,
    "date": date,
    "time": time,
    "currPlayers": [user],
    "maxPlayers": maxPlayers,
    "minAge": minAge,
    "maxAge": maxAge,
    "sport": sport,
    "skillLvl": skillLvl,
    "league": league
  };

  // Add the game to the database.
  // Returns the game w/ an ID assigned.
  newGame = addDocument('games', newGame);
}
