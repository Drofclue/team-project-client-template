import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = null;

// Put your mock objects here, as in Workshop 4
var initialData = {
  "games": {
    "1": {
      "_id": 1,
      "gameName": "Not American Football",
      "description": "Not American Football welcomes all people who want to play Fùtbol... except for people who are really good.",
      "location": "Amherst, MA",
      "currPlayers": [1],
      "maxPlayers": 30,
      "minAge": 16,
      "maxAge": 30,
      "sport": "Soccer",
      "skillLvl": "Novice-Intermerdiate",
      "league": "Not American Football"
    },
    "2": {
      "_id":2,
      "gameName": "Not European Football",
      "description":"Grid Iron Football is the greatest sport of all time, hands down! None of that spherical ball stuff, all about the hand egg!",
      "lcoation":"Hadley, MA",
      "currPlayers": [5],
      "maxPlayers": 30,
      "minAge": 20,
      "maxAge": 28,
      "sport":"Football",
      "skillLvl": "Intermediate-Advanced",
      "league":"American Sports"
    },
    "3":{
      "_id":2,
      "gameName": "New to Curling",
      "description":"Want to learn to play the traditional Olympic sport of Canada, come to Eashampton and we can learn together!",
      "lcoation":"Easthampton, MA",
      "currPlayers": [3],
      "maxPlayers": 4,
      "minAge": 35,
      "maxAge": 50,
      "sport":"Curling",
      "skillLvl": "Beginner",
      "league":"Independent"
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

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
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

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);