import {readDocument, writeDocument, addDocument, getCollection} from './database.js';
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

/*


export function deleteFeedItem(feedItemId, cb) {
 // Assumption: The current user authored this feed item.
 deleteDocument('feedItems', feedItemId);
 // Remove references to this feed item from all other feeds.
 var feeds = getCollection('feeds');
 var feedIds = Object.keys(feeds);
 feedIds.forEach((feedId) => {
   var feed = feeds[feedId];
   var itemIdx = feed.contents.indexOf(feedItemId);
   if (itemIdx !== -1) {
     // Splice out of array.
     feed.contents.splice(itemIdx, 1);
     // Update feed.
     writeDocument('feeds', feed);
   }
 });

 // Return nothing. The return just tells the client that
 // the server has acknowledged the request, and that it has
 // been a success.
 emulateServerReturn(null, cb);
}
*/

export function matchingGames(sportPassed, skillPassed, locPasssed, cb) {
  var matchedGames = [];
  var allGames = getCollection('games');
  var gameIds = Object.keys(allGames);
  gameIds.forEach((gameId) => {
    var curGame = allGames[gameId];
    var curSport = curGame.sport;
    var curSkill = curGame.skillLvl;
    var curLoc = curGame.location;
    if (curSport === sportPassed & curSkill === skillPassed & curLoc === locPasssed) {
      matchedGames.push(curGame);
    }
  });

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
