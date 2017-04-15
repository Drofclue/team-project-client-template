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



export function matchingGames(sportPassed, skillPassed, locPasssed, maxPlayPassed, minAgePassed, maxAgePassed, leagPassed, cb) {
  var matchedGames = [];
  var allGames = getCollection('games');
  var gameIds = Object.keys(allGames);
  gameIds.forEach((gameId) => {
    var curGame = allGames[gameId];
    var curSport = curGame.sport;
    var curSkill = curGame.skillLvl;
    var curLoc = curGame.location;
    var curMaxPlay = curGame.maxPlayers;
    var curMinAge = curGame.minAge;
    var curMaxAge = curGame.maxAge;
    var curLeague = curGame.league;
    if (curSport === sportPassed & ((curSkill === skillPassed || skillPassed === "") || (curLoc === locPasssed || typeof(locPasssed) === 'string') || (curMaxPlay === maxPlayPassed || maxPlayPassed === "") || (curMinAge === minAgePassed || minAgePassed === "")|| (curMaxAge === maxAgePassed || maxAgePassed === "") || (curLeague === leagPassed || leagPassed === ""))) {
      matchedGames.push(curGame);
    }
  });

  emulateServerReturn(matchedGames, cb);
}



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
