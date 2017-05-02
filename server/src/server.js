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

  /**
   * Resolves a list of user objects. Returns an object that maps user IDs to
   * user objects.
   */
  function resolveUserObjects(userList, callback) {
    // Special case: userList is empty.
    // It would be invalid to query the database with a logical OR
    // query with an empty array.
    if (userList.length === 0) {
      callback(null, {});
    } else {
      // Build up a MongoDB "OR" query to resolve all of the user objects
      // in the userList.
      var query = {
        $or: userList.map((id) => { return {_id: id } })
      };
      // Resolve 'like' counter
      db.collection('users').find(query).toArray(function(err, users) {
        if (err) {
          return callback(err);
        }
        // Build a map from ID to user object.
        // (so userMap["4"] will give the user with ID 4)
        var userMap = {};
        users.forEach((user) => {
          userMap[user._id] = user;
        });
        callback(null, userMap);
      });
    }
  }
  // Fetches game data from database
  function getGameData(game, cb) {
    db.collection('games').findOne(
      {_id:game},
      function(err, gameData) {
        cb(gameData);
      });
  }



  // Fetches user data from database
  function getUserData(user ,cb) {
    db.collection('users').findOne(
      {_id:user},
      function(err, userData) {
        cb(userData);
      });
  }

  function getLeagueData(league, cb) {
    db.collection('leagues').findOne(
      {_id:league},
      function(err, leagueData) {
        cb(leagueData);
      });
  }

  function getHighlightsItemSync(highlightsItemId, callback) {
    // Get the feed item with the given ID.
  db.collection('highlightsItems').findOne({
    _id: highlightsItemId
  }, function(err, highlightsItem) {
    if (err) {
      // An error occurred.
       return callback(err);
    } else if (highlightsItem === null) {
      // Feed item not found!
      return callback(null, null);
    }

    // Build a list of all of the user objects we need to resolve.
    // Start off with the author of the feedItem.
    var userList = [highlightsItem.contents.user];
    // Add all of the user IDs in the likeCounter.
    userList = userList.concat(highlightsItem.rspvcounter);
    // Add all of the authors of the comments.
    highlightsItem.comments.forEach((comment) => userList.push(comment.user));
    // Resolve all of the user objects!
    resolveUserObjects(userList, function(err, userMap) {
      if (err) {
        return callback(err);
      }
      // Use the userMap to look up the author's user object
      highlightsItem.contents.user = userMap[highlightsItem.contents.user];
      // Look up the user objects for all users in the like counter.
      highlightsItem.rspvcounter = highlightsItem.rspvcounter.map((userId) => userMap[userId]);
      // Look up each comment's author's user object.
      highlightsItem.comments.forEach((comment) => {
        comment.user = userMap[comment.user];
      });
      // Return the resolved feedItem!
      callback(null, highlightsItem);
    });
  });
}

    function getHighlightsData(user, callback) {
      db.collection('users').findOne({
    _id: user
  }, function(err, userData) {
    if (err) {
      return callback(err);
    } else if (userData === null) {
      // User not found.
      return callback(null, null);
    }

    db.collection('highlights').findOne({
      _id: userData.highlights
    }, function(err, highlightsData) {
      if (err) {
        return callback(err);
      } else if (highlightsData === null) {
        // Feed not found.
        return callback(null, null);
      }

      // We will place all of the resolved FeedItems here.
      // When done, we will put them into the Feed object
      // and send the Feed to the client.
      var resolvedContents = [];

      // processNextFeedItem is like an asynchronous for loop:
      // It performs processing on one feed item, and then triggers
      // processing the next item once the first one completes.
      // When all of the feed items are processed, it completes
      // a final action: Sending the response to the client.
      function processNextFeedItem(i) {
        // Asynchronously resolve a feed item.
        getHighlightsItemSync(highlightsData.contents[i], function(err, highlightsItem) {
          if (err) {
            // Pass an error to the callback.
            callback(err);
          } else {
            // Success!
            resolvedContents.push(highlightsItem);
            if (resolvedContents.length === highlightsData.contents.length) {
              // I am the final feed item; all others are resolved.
              // Pass the resolved feed document back to the callback.
              highlightsData.contents = resolvedContents;
              callback(null, highlightsData);
            } else {
              // Process the next feed item.
              processNextFeedItem(i + 1);
            }
          }
        });
      }

      // Special case: Feed is empty.
      if (highlightsData.contents.length === 0) {
        console.log("HIGHLIGHTSDATA CONTENTS LENGTH IS EQUAL TO ZEROOOOOOOOOOO")
        callback(null, highlightsData);
      } else {
        processNextFeedItem(0);
      }
    });
  });
}

    /**
     * Adds a new game to the database.
     */
      /**
   * Adds a new status update to the database.
   * @param user ObjectID of the user.
   */
   function createGame(gameName, description, location, date, time, user, maxPlayers, minAge, maxAge, sport, skillLvl, league, callback) {
    // The database will assign the ID for us.

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


    // Add the new game to the database.
    db.collection('games').insertOne(newGame, function(err, result) {
      if (err) {
        return callback(err);
      }
      // Unlike the mock database, MongoDB does not return the newly added object
      // with the _id set.
      // Attach the new game's ID to the newGame object. We will
      // return this object to the client when we are done.
      // (When performing an insert operation, result.insertedId contains the new
      // document's ID.)
      newGame._id = result.insertedId;
      return newGame;
      //callback(null, newGame);
    });
  }


    function matchingGames(sportPassed, skillPassed, locPassed, cb) {
        db.collection('games').find(
          {$and: [ {sport: sportPassed} , {$or: [{skill:skillPassed}, {loc: locPassed}]}]},
          function(err, matchedGames) {
            cb(matchedGames);
          });
      }
/*
  old code for finding a game.

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
        // Check that id is a string.
         if (typeof id === 'string') {
           return id;
         } else {
           // Not a number. Return "", an invalid ID.
           return "";
         }
      } catch (e) {
        // Return an invalid ID.
        console.log(authorizationLine);
        return -1;
      }
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
    getGameData(new ObjectID(gameid), function(gameData, err) {
      if (err){
        res.status(500).send("Database error: "+ err);
      } else if (gameData === null) {
        res.status(400).send("Could not look up user page for user: " + gameid);
      } else {
        res.send(gameData);
      }
    });
  });


  /**
   * Get the user data for a particular user.
   */
  app.get('/user/:userid', function(req, res) {
    var userid = req.params.userid;
    //console.log("UserID!!!!!!!!!!! : " + userid)
    getUserData(new ObjectID(userid), function(userData, err) {
      if (err){
        res.status(500).send("Database error: "+ err);
      } else if (userData === null) {
        res.status(400).send("Could not look up user page for user: " + userid);
      } else {
        res.send(userData);
      }
    });
  });


  app.get('/league/:leagueid', function(req, res) {
    var leagueid = req.params.leagueid;
    getLeagueData(new ObjectID(leagueid), function(leagueData, err) {
      if (err){
        res.status(500).send("Database error: "+ err);
      } else if (leagueData === null) {
        res.status(400).send("Could not look up user page for user: " + leagueid);
      } else {
        res.send(leagueData);
      }
    });
  });

  app.get('/user/:userid/highlights', function(req, res) {
  var userid = req.params.userid;
  //console.log("USERID!!!!!!!!!!!!!: " + userid)
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  //console.log("FROmUSER!!!!!!!!!:" + fromUser)
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  //var useridNumber = parseInt(userid, 10);

  // var useridNumber = parseInt(userid, 10);
  //var fromUserNumber = parseInt(fromUser, 10);
    if (fromUser === userid) {
    // Send response.
      getHighlightsData(new ObjectID(userid), function(err, feedData) {
        if (err) {
          // A database error happened.
          // Internal Error: 500.
          res.status(500).send("Database error: " + err);
        } else if (feedData === null) {
          // Couldn't find the feed in the database.
          res.status(400).send("Could not look up highlights for user " + fromUser.toString());
        } else {
          // Send data.
          res.send(feedData);
        }
      });
    } else {
      // 403: Unauthorized request.
      console.log("fromUser: " + fromUser)
      res.status(403).end();
    }
});



  // `POST /game { ... }`
  app.post('/game',
           validate({ body: GameSchema }), function(req, res) {
    // If this function runs, `req.body` passed JSON validation!
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));

    var fromUserNumber = parseInt(fromUser, 10);
    // Check if requester is authorized to post this status update.
    // (The requester must be the author of the update.)
    if (fromUserNumber === body.currPlayers[0]) {
      createGame(new ObjectID(fromUser), body.gameName, body.description, body.location, body.date, body.time, body.currPlayers, body.maxPlayers, body.minAge, body.maxAge, body.sport, body.skillLvl, body.league, function(err, newUpdate){
      // When POST creates a new resource, we should tell the client about it
      // in the 'Location' header and use status code 201.
      if (err) {
       // A database error happened.
       // 500: Internal error.
       res.status(500).send("A database error occurred: " + err);
     } else{

      res.status(201);
      res.set('Location', '/game/' + newUpdate._id);
       // Send the update!
      res.send(newUpdate);
    }
  });} else{
      // 401: Unauthorized.
      console.log("fromUseris: " + fromUser + "currPlayers is: " + body.currPlayers[0] + "fromuserNumber is: " + fromUserNumber)
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
  app.get('/findagame/:sportPassed/:skillPassed/:locPassed', function(req, res) {
    var body = req.params;
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
