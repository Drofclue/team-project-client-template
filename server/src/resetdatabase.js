var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "cherryPicker";
// Put the initial mock objects here.
var initialData = {
    //  User information
    "users":{
      // This user (our default user) has id "1"
      "1":{
        "_id":new ObjectID("000000000000000000000001"),
        "username": "LingoDaddy42",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "highlights": new ObjectID("000000000000000000000004"),
        "name": "Lingo A'Daddy",
        "gender": "Helicopter",
        "sports": ["muy thai","baseball","water polo"],
        "skillLvl": ["Novice", "Intermediate", "Advanced"],
        "age": "79",
        "games":[new ObjectID("000000000000000000000004"),new ObjectID("000000000000000000000005")], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[new ObjectID("000000000000000000000001")], // The schdeule uses the users ID# to fill/list the events
        "leagues":[new ObjectID("000000000000000000000001")], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "2":{
        "_id":new ObjectID("000000000000000000000002"),
        "username": "BroDaddy901",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "name": "Brosidan Daddy",
        "highlights": new ObjectID("000000000000000000000004"),
        "gender": "Tractor",
        "sports": ["muy thai","baseball","water polo"],
        "skillLvl": ["Novice", "Intermediate", "Advanced"],
        "age": "24",
        "games":[new ObjectID("000000000000000000000004")], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[new ObjectID("000000000000000000000001")], // The schdeule uses the users ID# to fill/list the events
        "leagues":[new ObjectID("000000000000000000000002")], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "3":{
        "_id":new ObjectID("000000000000000000000003"),
        "username": "FuriousSquirrel4500",
        "profilepicture": "img/middle-aged-bowler.jpg",
        "name": "Paul Lactose",
        "highlights": new ObjectID("000000000000000000000004"),
        "gender": "Male",
        "sports": ["running","water polo", "basketball"],
        "skillLvl": ["Advanced", "Intermediate", "Advanced"],
        "age": "42",
        "games":[new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006")], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[new ObjectID("000000000000000000000001")], // The schdeule uses the users ID# to fill/list the events
        "leagues":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002")], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "4":{
        "_id":new ObjectID("000000000000000000000004"),
        "username": "donnydad",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "highlights": new ObjectID("000000000000000000000004"),
        "name": "Elrond Hubbard",
        "gender": "Space Alien",
        "sports": ["soccer"],
        "skillLvl": ["Advanced"],
        "age": "24",
        "games":[new ObjectID("000000000000000000000004")], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[new ObjectID("000000000000000000000001")], // The schdeule uses the users ID# to fill/list the events
        "leagues":[new ObjectID("000000000000000000000005")], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      },
      "5":{
        "_id":new ObjectID("000000000000000000000005"),
        "username": "FuriousBallWoman",
        "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
        "name": "Brenda Fiddlebiscuits",
        "highlights": new ObjectID("000000000000000000000004"),
        "gender": "Female",
        "sports": ["curling"],
        "skillLvl": ["Beginner"],
        "age": "102",
        "games":[new ObjectID("000000000000000000000003")], //an array/list of the games that a user has. In the form of the Game ID #s
        "suggestedgames":[new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000004")], //an arrayList of the games that are suggested for the user to participate in by Game ID
        "schdeule":[new ObjectID("000000000000000000000001")], // The schdeule uses the users ID# to fill/list the events
        "leagues":[new ObjectID("000000000000000000000001")], // The list of leagues the user is associated with, by refernce of the league ID#
        "msgThread":[]/* List of message Items specific to user-user conversation*/
      }
    },
    // League information
     "leagues" : {
       // Example League listing, this league has id "1"
       "0":{
         "_id":new ObjectID("000000000000000000000000"),
         "leagName": "This is an Independent Event",
         "picture": "img/lingodaddy_profile_pic_userhub.jpg",
         "currentUsername": "a",
         "status": "",
         "memCount": "5",
         "admin": "", // a specific user
         "adminnum": new ObjectID("000000000000000000000001"),
         "sports":[],
         "skill":[],
         "members":[], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":[],// List of the games associated with the league, uses game ID# reference
         "dates":[],
         "times":[],
         "locations":[],
         "description": ""
       },
       "1":{
         "_id":new ObjectID("000000000000000000000001"),
         "leagName": "Not New to Sports",
         "picture": "img/middle-aged-bowler.jpg",
         "currentUsername": "Bingomommy512",
         "status": "Open",
         "memCount": "209",
         "admin": "LingoDaddy42", // a specific user
         "adminnum": new ObjectID("000000000000000000000001"),
         "sports":["dodgeball","synchronized swimming"],
         "skill":["Novice","Intermediate"],
         "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
         "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
         "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
         "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
         "description": "This is a sample description for a league page"
       },
       "2":{
         "_id":new ObjectID("000000000000000000000002"),
         "leagName": "Middle Aged Bowlers",
         "picture": "img/middle-aged-bowler.jpg",
         "currentUsername": "FuriousBallWoman",
         "status": "Closed",
         "memCount": "696",
         "admin": "LingoDaddy42", // a specific user
         "adminnum": new ObjectID("000000000000000000000001"),
         "sports":["bowling","walking", "running", "hockey", "frisbee"],
         "skill":["Novice", "Beginner", "Beginner- Advanced", "Advanced", "Novice"],
         "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
         "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
         "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
         "locations":["Not Puffers", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
         "description": "This is a sample description for another different league page"

       },

       "3":{
         "_id":new ObjectID("000000000000000000000003"),
         "leagName": "Jesuit Club of Birmingham Alabama",
         "picture": "img/middle-aged-bowler.jpg",
         "currentUsername": "JesusFreak4210",
         "status": "Open",
         "memCount": "2",
         "admin": "LingoDaddy42", // a specific user
         "adminnum" : new ObjectID("000000000000000000000001"),
         "sports":["bowling","walking", "running", "ultimate frisbee"],
         "skill":["Novice", "Beginner", "Beginner- Advanced"],
         "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
         "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
         "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
         "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
         "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
         "description": "ent league page This is a sample description for another different league page v This is a sample description for another different league page ent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league page"
     },
     "4":{
       "_id":new ObjectID("000000000000000000000004"),
       "leagName": "Runners club of alberta",
       "picture": "img/middle-aged-bowler.jpg",
       "currentUsername": "Jaxon",
       "status": "Open",
       "memCount": "4",
       "admin": "LingoDaddy42", // a specific user
       "adminnum": new ObjectID("000000000000000000000001"),
       "sports":["bowling","walking", "swimming", "four square"],
       "skill":["Novice", "Beginner", "Beginner", "Advanced"],
       "members":["Carlos390", "OGLingo", "Calvin", "Not Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
       "games":["walking", "running", "swimming", "jogging"],// List of the games associated with the league, uses game ID# reference
       "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
       "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
       "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
       "description": "ent league page This is a sample description for another different league page v This is a sample description for another different league page ent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league page"
   },
   "5":{
     "_id":new ObjectID("000000000000000000000005"),
     "leagName": "Not American Sports",
     "picture": "img/middle-aged-bowler.jpg",
     "currentUsername": "PancakeBilly65",
     "status": "Open",
     "memCount": "4",
     "admin": "LingoDaddy42", // a specific user
     "adminnum": new ObjectID("000000000000000000000001"),
     "sports":["soccer"],
     "skill":["Novice"],
     "members":["Carlos390", "OGLingo", "Calvin", "Not Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
     "games":["soccer Game 1", "soccer Game 2", "soccer Game 3", "Last soccer Game"],// List of the games associated with the league, uses game ID# reference
     "dates":["June 1st 2018", "June 29th 2018", "July 2nd 2017", "July 8th 2017"],
     "times":["4:00PM EST", "5:00PM EST", "4:30PM EST", "9:00PM EST"],
     "locations":["Puffers Pond", "Puffers Pond", "Puffers Pond", "Mullins Center"],
     "description": "We do soccer. Not Football. Ever."
  },
  "6":{
    "_id":new ObjectID("000000000000000000000006"),
    "leagName": "American Sports",
    "picture": "img/hulk-hogan-usa-flag.jpg",
    "currentUsername": "CupcakeBilly65",
    "status": "Open",
    "memCount": "1",
    "admin": "LingoDaddy4233", // a specific user
    "adminnum": new ObjectID("000000000000000000000001"),
    "sports":["football"],
    "skill":["Novice"],
    "members":["LingoDaddy4233"], // store the list of members as the User ID's, that way easy to pass/use information about the members
    "games":["Game1", "Game2", "Game3", "Big Ol' Game"],// List of the games associated with the league, uses game ID# reference
    "dates":["February 2nd 2018", "March 2nd 2018", "May 2 2017", "July 8 2017"],
    "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
    "locations":["Umass Amherst Campus", "Umass Amherst Campus", "Route 9", "Umass Amherst Campus"],
    "description": "We do football. Not soccer. Ever."
  },

  "7":{
    "_id":new ObjectID("000000000000000000000007"),
    "leagName": "British Sports",
    "picture": "img/jogger.jpg",
    "currentUsername": "dringo",
    "status": "Closed",
    "memCount": "19302",
    "admin": "LingoDaddy4233", // a specific user
    "adminnum": new ObjectID("000000000000000000000001"),
    "sports":["tea drinking"],
    "skill":["Advanced"],
    "members":["LingoDaddy4233"], // store the list of members as the User ID's, that way easy to pass/use information about the members
    "games":["Game1", "Game2", "Game3", "Big Ol' Game"],// List of the games associated with the league, uses game ID# reference
    "dates":["February 2nd 2018", "March 2nd 2018", "May 2 2017", "July 8 2017"],
    "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
    "locations":["Umass Amherst Campus", "Umass Amherst Campus", "Route 9", "Umass Amherst Campus"],
    "description": "We like to drink tea. Sometimes. Okay all the time"
  },

  "8":{
    "_id":new ObjectID("000000000000000000000008"),
    "leagName": "American Sports",
    "picture": "img/jogger.jpg",
    "currentUsername": "CupcakeBilly65",
    "status": "Open",
    "memCount": "1",
    "admin": "LingoDaddy4233", // a specific user
    "adminnum": new ObjectID("000000000000000000000001"),
    "sports":["football"],
    "skill":["Novice"],
    "members":["LingoDaddy4233"], // store the list of members as the User ID's, that way easy to pass/use information about the members
    "games":["Game1", "Game2", "Game3", "Big Ol' Game"],// List of the games associated with the league, uses game ID# reference
    "dates":["February 2nd 2018", "March 2nd 2018", "May 2 2017", "July 8 2017"],
    "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
    "locations":["Umass Amherst Campus", "Umass Amherst Campus", "Route 9", "Umass Amherst Campus"],
    "description": "We do football. Not soccer. Ever."
  }
   },
    "games": {
      "0": {
        "_id": new ObjectID("000000000000000000000000"),
        "gameName": "No Game Data",
        "description": "This Game Does Not Exist",
        "location": "N/A",
        "date": "N/A",
        "time": "N/A",
        "currPlayers": [],
        "maxPlayers": 0,
        "minAge": 0,
        "maxAge": 0,
        "sport": "N/A",
        "skillLvl": "N/A",
        "league": "N/A",
        "leagueid":new ObjectID("000000000000000000000000")
      },
      "1": {
        "_id": new ObjectID("000000000000000000000001"),
        "gameName": "Not American Football",
        "description": "Not American Football welcomes all people who want to play Fùtbol... except for people who are really good.",
        "location": "Amherst, MA",
        "date": "5/15/17",
        "time": "6:30 PM",
        "currPlayers": [new ObjectID("000000000000000000000001")],
        "maxPlayers": 20,
        "minAge": 16,
        "maxAge": 30,
        "sport": "soccer",
        "skillLvl": "Novice",
        "league": "Not American Sports",
        "leagueid":new ObjectID("000000000000000000000005")
      },
      "2": {
        "_id":new ObjectID("000000000000000000000002"),
        "gameName": "Not European Football",
        "description":"Grid Iron Football is the greatest sport of all time, hands down! None of that spherical ball stuff, all about the hand egg!",
        "location":"Hadley, MA",
        "date": "5/20/17",
        "time": "10:30 AM",
        "currPlayers": [new ObjectID("000000000000000000000005")],
        "maxPlayers": 30,
        "minAge": 20,
        "maxAge": 28,
        "sport":"football",
        "skillLvl": "Advanced",
        "league":"American Sports",
        "leagueid": new ObjectID("000000000000000000000006")
      },
      "3":{
        "_id":new ObjectID("000000000000000000000003"),
        "gameName": "New to Curling",
        "description":"Want to learn to play the traditional Olympic sport of Canada, come to Eashampton and we can learn together!",
        "location":"Easthampton, MA",
        "date": "5/22/17",
        "time": "7:00 PM",
        "currPlayers": [new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007")],
        "maxPlayers": 4,
        "minAge": 35,
        "maxAge": 50,
        "sport":"curling",
        "skillLvl": "Beginner",
        "league":"Independent",
        "leagueid": new ObjectID("000000000000000000000000")
      },
      "4":{
        "_id":new ObjectID("000000000000000000000004"),
        "gameName": "Senior Fight Night",
        "description":"Get together and spar your friends, neighbors, and loved ones!",
        "location":"Northampton, MA",
        "date": "5/9/17",
        "time": "1:00 AM",
        "maxPlayers": 4,
        "currPlayers": [new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007")],
        "minAge": 50,
        "maxAge": 75,
        "sport":"muy thai",
        "skillLvl": "Novice",
        "league":"Independent",
        "leagueid": new ObjectID("000000000000000000000000")
      },
      "5":{
        "_id":new ObjectID("000000000000000000000005"),
        "gameName": "Water Polo Throwdown",
        "description":"Everyone is welcome to come play some polo... IN A POOL!",
        "location":"Boston, MA",
        "date": "5/7/17",
        "time": "6:00 AM",
        "currPlayers": [new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000005"),new ObjectID("000000000000000000000006"),new ObjectID("000000000000000000000007")],
        "maxPlayers": 4,
        "minAge": 1,
        "maxAge": 99,
        "sport":"water polo",
        "skillLvl": "Beginner",
        "league":"Independent",
        "leagueid": new ObjectID("000000000000000000000000")
      }
    },
    "highlightsItems": {
      "1": {
        "_id": new ObjectID("000000000000000000000004"),
        "rsvpCounter": [new ObjectID("000000000000000000000003"),new ObjectID("000000000000000000000005")],
        "type": "highlightsUpdate",
        "contents": {
          "user": new ObjectID("000000000000000000000004"),
          "timestamp": 1453668480000,
          "location": "Northampton, MA",
          "contents": "League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields."
        },
        // List of comments on the post
        "comments": [
          {
            // The user of the comment.
            "user": new ObjectID("000000000000000000000003"),
            // The contents of the comment.
            "contents": "Hope no one comes!",
            // The date the comment was posted.
            // 01/24/16 22:00 EST
            "timestamp": 1453690800000
          },
          {
            "user": new ObjectID("000000000000000000000005"),
            "contents": "#rekt",
            "timestamp": 1453690800000
          }
        ]
      }
    },
      // "highlgihts" collection. Highlights for each FB user.
      "highlights": {
        "4": {
          "_id": new ObjectID("000000000000000000000004"),
          // Listing of highlgihtsItems in the highlights.
          "contents": [new ObjectID("000000000000000000000001")]
        }
      }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
