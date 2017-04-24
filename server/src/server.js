// Implement your server in this file.
// We should be able to run your server with node src/server.js
// Imports the express Node module.
// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
var database = require ('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var getCollection = database.getCollection;

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function matchingGames(sportPassed, skillPassed, locPasssed) {
  var matchedGames = [];
  var allGames = getCollection('games');
  var gameIds = Object.keys(allGames);
  gameIds.forEach((gameId) => {
    var curGame = allGames[gameId];
    var curSport = curGame.sport;
    var curSkill = curGame.skillLvl;
    var curLoc = curGame.location;
    if (curSport === sportPassed & ((curSkill === skillPassed || skillPassed === "") || (curLoc === locPasssed || typeof(locPasssed) === 'string') /*|| (curMaxPlay === maxPlayPassed || maxPlayPassed === "") || (curMinAge === minAgePassed || minAgePassed === "")|| (curMaxAge === maxAgePassed || maxAgePassed === "") || (curLeague === leagPassed || leagPassed === ""))*/)) {
      matchedGames.push(curGame);
    }
  });

  return(matchedGames);
}

function opsMatchingGames(sportPassed, skillPassed, locPasssed, maxPlayPassed, minAgePassed, maxAgePassed, leagPassed) {
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
    if (curSport === sportPassed & ((curSkill === skillPassed || skillPassed === "") || (curLoc === locPasssed || typeof(locPasssed) === 'string')
    || (curMaxPlay === maxPlayPassed || maxPlayPassed === "") || (curMinAge === minAgePassed || minAgePassed === "")|| (curMaxAge === maxAgePassed || maxAgePassed === "")
    || (curLeague === leagPassed || leagPassed === ""))){
      matchedGames.push(curGame);
    }
  });

  return(matchedGames);
}

/*
 * GET /findagame/ the games which match the search criteria
*/
app.get('/findagame/', function(req, res){
  var
})
