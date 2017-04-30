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
var ResetDatabase = require('./resetdatabase');

var GameSchema = require('./schemas/game.json');
var FindaGameSchema = require('./schemas/game.json');
var validate = require('express-jsonschema').validate;

var bodyParser = require('body-parser');

var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('mongo-express/config.default.js');
var url = 'mongodb://localhost:27017/cherryPicker';

MongoClient.connect(url, function(err, db) {
  app.use('/mongo_express', mongo_express(mongo_express_config));
  // Put everything that uses `app` into this callback function.
  // from app.use(bodyParser.text());
  // all the way to
  // app.listen(3000, ...
  // Also put all of the helper functions that use mock database
  // methods like readDocument, writeDocument, ...

  // Fetches game data from database
  function getGameData(game) {
  var gameData = readDocument('games', game);
    return gameData;
  }

  // Fetches user data from database
  function getUserData(user) {
    var userData = readDocument('users', user);
    return userData;
  }

  function getLeagueData(league) {
    var leagueData = readDocument('leagues', league)
    return leagueData;
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

    function getHighlightsData(user) {
      var userData = readDocument('users', user);
      var highlightsData = readDocument('highlights', userData.highlights);
      highlightsData.contents = highlightsData.contents.map(getHighlightsItemSync);
      return highlightsData;
    }

    /**
     * Adds a new game to the database.
     */
    function createGame(gameName, description, location, date, time, user, maxPlayers, minAge, maxAge, sport, skillLvl, league) {
      // The new game. The database will assign the ID for us.
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

      // Return the newly-posted object.
      return newGame;
    }

    function matchingGames(sportPassed, skillPassed, locPassed) {

      var allGames = getCollection('games');
      var everygame = [];
      var gameIds = Object.keys(allGames);
      gameIds.forEach((gameId) => {everygame.push(allGames[gameId]);
      });

      var matchGames = everygame.filter(function(game){

        return (game.sport.toLowerCase() === sportPassed) && ((game.skillLvl.toLowerCase() === skillPassed)||(game.loc.toLowerCase() === locPassed));
    });
    return matchGames;
    }

  // You run the server from `server`, so `../client/build` is `server/../client/build`.
  // '..' means "go up one directory", so this translates into `client/build`!
  app.use(express.static('../client/build'));

  // Support receiving text in HTTP request bodies
  app.use(bodyParser.text());
  // Support receiving JSON in HTTP request bodies
  app.use(bodyParser.json());


  /**
   * Get the game data for a particular game.
   */
  app.get('/game/:gameid', function(req, res) {
    var gameid = req.params.gameid;
    res.send(getGameData(gameid));
  });


  /**
   * Get the user data for a particular user.
   */
  app.get('/user/:userid', function(req, res) {
    var userid = req.params.userid;
    res.send(getUserData(userid));
  });


  app.get('/league/:leagueid', function(req, res) {
    var leagueid = req.params.leagueid;
    res.send(getLeagueData(leagueid));
  });

  app.get('/user/:userid/highlights', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 10);
    if (fromUser === useridNumber) {
    // Send response.
      res.send(getHighlightsData(userid));
    } else {
    // 401: Unauthorized request.
      res.status(401).end();
    }
});


  // `POST /game { ... }`
  app.post('/game',
           validate({ body: GameSchema }), function(req, res) {
    // If this function runs, `req.body` passed JSON validation!
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));

    // Check if requester is authorized to post this status update.
    // (The requester must be the author of the update.)
    if (fromUser === body.currPlayers[0]) {
      var newUpdate = createGame(body.gameName, body.description, body.location, body.date, body.time, body.currPlayers, body.maxPlayers, body.minAge, body.maxAge, body.sport, body.skillLvl, body.league);
      // When POST creates a new resource, we should tell the client about it
      // in the 'Location' header and use status code 201.
      res.status(201);
      res.set('Location', '/game/' + newUpdate._id);
       // Send the update!
      res.send(newUpdate);
    } else {
      // 401: Unauthorized.
      res.status(401).end();
    }
  });



  // Reset the database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });


  /*
   * GET /findagame/ the games which match the search criteria
  */
  app.get('/findagame/:sportPassed/:skillPassed/:locPassed' /*, validate({ body: FindaGameSchema })*/, function(req, res) {
    // If this function runs, `req.body` passed JSON validation!
    var body = req.params;
    // Check if requester is authorized to post this status update.
    // (The requester must be the author of the update.)
    if (true) {
      var resultingGames = matchingGames(body.sportPassed, body.skillPassed, body.locPassed);
      // When POST creates a new resource, we should tell the client about it
      // in the 'Location' header and use status code 201.
      res.status(200);
      // Send the update!
      res.send(resultingGames);
    }
    else {
      // 401: Unauthorized.
      res.status(401).end();
      }
  });

  /**
   * Translate JSON Schema Validation failures into error 400s.
   */
  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      // Set a bad request http response status
      res.status(400).end();
    } else {
      // It's some other sort of error; pass it to next error middleware handler
      next(err);
    }
  });

  // Starts the server on port 3000!
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

});
// The file ends here. Nothing should be after this.




/**
 * Get the user ID from a token. Returns -1 (an invalid ID)
 * if it fails.
 */
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}
