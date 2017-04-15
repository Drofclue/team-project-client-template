import {readDocument, writeDocument, addDocument, readManyDocs} from './database.js';
//import data from './database.js';

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

export function getGameData(game, cb) {
  var gameData = readDocument('games', game);
  emulateServerReturn(gameData, cb);
}

export function getLeagueData(league, cb) {
  var leagueData = readDocument('leagues', league);
  emulateServerReturn(leagueData, cb);
}

export function getSuggestedGames(user, cb) {
  var userData = readDocument('users', user);
  emulateServerReturn(userData, cb);
}

function getHighlightsItemSync(highlightsItemId) {
    var highlightsItem = readDocument('highlightsItems', highlightsItemId);
    highlightsItem.rsvpCounter =
      highlightsItem.rsvpCounter.map((id) => readDocument('users', id));
    highlightsItem.contents.user =
      readDocument('users', highlightsItem.contents.user);
    highlightsItem.comments.forEach((comment) => {
      comment.user = readDocument('users', comment.user);
    });
    return highlightsItem;
  }

  export function getHighlightsData(user, cb) {
    var userData = readDocument('users', user);
    var highlightsData = readDocument('highlights', userData.highlights);
    highlightsData.contents = highlightsData.contents.map(getHighlightsItemSync);
    emulateServerReturn(highlightsData, cb);
  }

  // export function postComment(highlightsItemId, author, contents, cb) {
  //   var highlightsItem = readDocument('highlightsItems', highlightsItemId);
  //   highlightsItem.comments.push({
  //     "author": author,
  //     "contents": contents,
  //     "postDate": new Date().getTime()
  //   });
  //   writeDocument('highlightsItems', highlightsItem);
  //   emulateServerReturn(getHighlightsItemSync(highlightsItemId), cb);
  // }

  // export function rsvpHighlightsItem(highlightsItemId, userId, cb) {
  //   var highlightsItem = readDocument('highlightsItems', highlightsItemId);
  //   highlightsItem.rsvpCounter.push(userId);
  //   writeDocument('highlightsItems', highlightsItem);
  //   emulateServerReturn(highlightsItem.rsvpCounter.map((userId) => readDocument('users', userId)), cb);
  // }
  //
  // export function unrsvpHighlightsItem(highlightsItemId, userId, cb) {
  //   var highlightsItem = readDocument('highlightsItems', highlightsItemId);
  //   var userIndex = highlightsItem.rsvpCounter.indexOf(userId);
  //   if (userIndex !== -1) {
  //     highlightsItem.rsvpCounter.splice(userIndex, 1);
  //     writeDocument('highlightsItems', highlightsItem);
  //   }
  //   emulateServerReturn(highlightsItem.rsvpCounter.map((userId) => readDocument('users', userId)), cb);
  // }

/*


 * Compress the resultItem by changing the state of the expandVal
 * Provides an updated expandVal in the response.

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




export function readAllDbType(dbEntryType) {
  return JSONClone(data[dbEntryType])
}

*/

export function matchingGames(sport, skillLevel, loc, cb) {
  var i = 1;
  var checkGame;
//  var keys = Object.keys(allGames);
  var matchedGames = [];
  while((checkGame = readDocument("games",i))){
    if(checkGame.sport === sport || checkGame.skillLvl === skillLevel ||checkGame.location === location){
      matchedGames = matchedGames + checkGame;
    }
    i++;


  }
  emulateServerReturn(matchedGames, cb);



}

/*
export function search4Game(gameID, cb) {
  var gameData = readDocument('games', gameID);
  if (gameData._id === gameID) {
    writeDocument('fgResultList', gameData);
  }
  emulateServerReturn(gameData, cb);

*/

export function createGame(gameName, description, location, date, time, user, maxPlayers, minAge, maxAge, sport, skillLvl, league, cb) {
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
  emulateServerReturn(newGame, cb);

}
