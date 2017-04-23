import React from 'react';

// Modify with your startup's name!
var startupName = null;

// Put your mock objects here, as in Workshop 4
var initialData = {

  //  User information
  "users":{
    // This user (our default user) has id "1"
    "1":{
      "_id":1,
      "username": "LingoDaddy42",
      "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
      "highlights": 4,
      "name": "Lingo a",
      "gender": "Helicopter",
      "sports": ["Muy Thai","Baseball","Water Polo"],
      "skillLvl": ["Novice", "Intermediate", "Advanced"],
      "age": "79",
      "games":[1,2], //an array/list of the games that a user has. In the form of the Game ID #s
      "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
      "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
      "leagues":[1], // The list of leagues the user is associated with, by refernce of the league ID#
      "msgThread":[]/* List of message Items specific to user-user conversation*/
    },
    "2":{
      "_id":2,
      "username": "BroDaddy901",
      "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
      "name": "Lingo Daddy",
      "highlights": 4,
      "gender": "Helicopter",
      "sports": ["Muy Thai","Baseball","Water Polo"],
      "skillLvl": ["Novice", "Intermediate", "Advanced"],
      "age": "24",
      "games":[1,2], //an array/list of the games that a user has. In the form of the Game ID #s
      "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
      "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
      "leagues":[2], // The list of leagues the user is associated with, by refernce of the league ID#
      "msgThread":[]/* List of message Items specific to user-user conversation*/
    },
    "3":{
      "_id":3,
      "username": "Fury of Balls",
      "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
      "name": "Lingo Daddy",
      "highlights": 4,
      "gender": "Helicopter",
      "sports": ["Muy Thai","Baseball","Water Polo", "Soccer"],
      "skillLvl": ["Novice", "Intermediate", "Advanced"],
      "age": "24",
      "games":[1,2], //an array/list of the games that a user has. In the form of the Game ID #s
      "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
      "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
      "leagues":[3], // The list of leagues the user is associated with, by refernce of the league ID#
      "msgThread":[]/* List of message Items specific to user-user conversation*/
    },
    "4":{
      "_id":4,
      "username": "League of Games",
      "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
      "highlights": 4,
      "name": "Lingo Daddy",
      "gender": "Helicopter",
      "sports": ["Muy Thai","Baseball","Water Polo", "Soccer"],
      "skillLvl": ["Novice", "Intermediate", "Advanced"],
      "age": "24",
      "games":[1,2], //an array/list of the games that a user has. In the form of the Game ID #s
      "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
      "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
      "leagues":[1], // The list of leagues the user is associated with, by refernce of the league ID#
      "msgThread":[]/* List of message Items specific to user-user conversation*/
    },
    "5":{
      "_id":5,
      "username": "Balls of Fury",
      "profilepicture": "img/lingodaddy_profile_pic_userhub.jpg",
      "name": "Lingo Daddy",
      "highlights": 4,
      "gender": "Helicopter",
      "sports": ["Soccer"],
      "skillLvl": ["Novice", "Intermediate", "Advanced"],
      "age": "24",
      "games":[1,2], //an array/list of the games that a user has. In the form of the Game ID #s
      "suggestedgames":[1,2,3], //an arrayList of the games that are suggested for the user to participate in by Game ID
      "schdeule":[1], // The schdeule uses the users ID# to fill/list the events
      "leagues":[1], // The list of leagues the user is associated with, by refernce of the league ID#
      "msgThread":[]/* List of message Items specific to user-user conversation*/
    }
  },
  // League information
   "leagues" : {
     // Example League listing, this league has id "1"
     "0":{
       "_id":0,
       "leagName": "This is an Independent Event",
       "currentUsername": "",
       "status": "",
       "memCount": "",
       "admin": "", // a specific user
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
       "_id":1,
       "leagName": "Not New to Sports",
       "currentUsername": "Bingomommy512",
       "status": "Open",
       "memCount": "209",
       "admin": "LingoDaddy42", // a specific user
       "sports":["Dodgeball","Synchronized Swimming"],
       "skill":["Novice","Intermediate"],
       "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
       "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
       "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
       "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
       "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
       "description": "This is a sample description for a league page"
     },
     "2":{
       "_id":2,
       "leagName": "Middle Aged Bowlers",
       "currentUsername": "Calvin",
       "status": "Closed",
       "memCount": "666",
       "admin": "LingoDaddy42", // a specific user
       "sports":["Bowling","Walking", "Running", "Hockey", "Frisbee"],
       "skill":["Novice", "Beginner", "Beginner- Advanced", "Advanced", "Novice"],
       "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
       "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
       "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
       "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
       "locations":["Not Puffers", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
       "description": "This is a sample description for another different league page"

     },

     "3":{
       "_id":3,
       "leagName": "Jesuit Club of Birmingham Alabama",
       "currentUsername": "JesusFreak4210",
       "status": "Open",
       "memCount": "2",
       "admin": "LingoDaddy42", // a specific user
       "sports":["Bowling","Walking", "Running", "Ultimate Frisbee"],
       "skill":["Novice", "Beginner", "Beginner- Advanced"],
       "members":["Carlos390", "OGLingo", "Calvin", "The_mIddlE_AGEd_Bowl3R", "Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
       "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
       "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
       "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
       "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
       "description": "ent league page This is a sample description for another different league page v This is a sample description for another different league page ent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league page"
   },
   "4":{
     "_id":4,
     "leagName": "Runners club of alberta",
     "currentUsername": "Jaxon",
     "status": "Open",
     "memCount": "4",
     "admin": "LingoDaddy42", // a specific user
     "sports":["Bowling","Walking", "Swimming", "Four Square"],
     "skill":["Novice", "Beginner", "Beginner", "Advanced"],
     "members":["Carlos390", "OGLingo", "Calvin", "Not Micheal"], // store the list of members as the User ID's, that way easy to pass/use information about the members
     "games":["Walking", "Running", "Swimming", "Jogging"],// List of the games associated with the league, uses game ID# reference
     "dates":["April 1st 2018", "April 29 2018", "May 2 2017", "July 8 2017"],
     "times":["4:00AM EST", "5:00PM EST", "4:30AM EST", "12:00PM EST"],
     "locations":["Puffers Pond", "Umass Amherst Campus", "Route 9", "That Creepy Trail by Sylvan"],
     "description": "ent league page This is a sample description for another different league page v This is a sample description for another different league page ent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league pageent league page This is a sample description for another different league page v This is a sample description for another different league page"
 }
 },
  "games": {
    "0": {
      "_id": 0,
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
      "league": "N/A"
    },
    "1": {
      "_id": 1,
      "gameName": "Not American Football",
      "description": "Not American Football welcomes all people who want to play Fùtbol... except for people who are really good.",
      "location": "Amherst, MA",
      "date": "5/15/17",
      "time": "6:30 PM",
      "currPlayers": [1],
      "maxPlayers": 20,
      "minAge": 16,
      "maxAge": 30,
      "sport": "soccer",
      "skillLvl": "Novice",
      "league": "Not American Football",
      "leagueid":2
    },
    "2": {
      "_id":2,
      "gameName": "Not European Fooaseball",
      "description":"Grid Iron Football is the greatest sport of all time, hands down! None of that spherical ball stuff, all about the hand egg!",
      "location":"Hadley, MA",
      "date": "5/20/17",
      "time": "10:30 AM",
      "currPlayers": [5],
      "maxPlayers": 30,
      "minAge": 20,
      "maxAge": 28,
      "sport":"Football",
      "skillLvl": "Advanced",
      "league":"American Sports",
      "leagueid": 1
    },
    "3":{
      "_id":3,
      "gameName": "New to Curling",
      "description":"Want to learn to play the traditional Olympic sport of Canada, come to Eashampton and we can learn together!",
      "location":"Easthampton, MA",
      "date": "5/22/17",
      "time": "7:00 PM",
      "currPlayers": [3,5,6,7],
      "maxPlayers": 4,
      "minAge": 35,
      "maxAge": 50,
      "sport":"Curling",
      "skillLvl": "Beginner",
      "league":"Independent",
      "leagueid": 0
    }
  },
  "highlightsItems": {
    "1": {
      "_id": 4,
      "rsvpCounter": [3,5],
      "type": "highlightsUpdate",
      "contents": {
        "user": 4,
        "timestamp": 1453668480000,
        "location": "Northampton, MA",
        "contents": "League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields."
      },
      // List of comments on the post
      "comments": [
        {
          // The user of the comment.
          "user": 3,
          // The contents of the comment.
          "contents": "Hope no one comes!",
          // The date the comment was posted.
          // 01/24/16 22:00 EST
          "timestamp": 1453690800000
        },
        {
          "user": 5,
          "contents": "#rekt",
          "timestamp": 1453690800000
        }
      ]
    }
  },
    // "highlgihts" collection. Highlights for each FB user.
    "highlights": {
      "4": {
        "_id": 4,
        // Listing of highlgihtsItems in the highlights.
        "contents": [1]
      }
    }
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function getCollection(collection){
  return JSONClone(data[collection]);
}
/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

export default class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

/**ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);*/
