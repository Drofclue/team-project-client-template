import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = null;

// Put your mock objects here, as in Workshop 4
var initialData = {

  //  User information
  "users":{
    // This user (our default user) has id "1"
    "1":{
      "._id":1,
      "userName": "LingoDaddy42"
    },
    "2":{
      "._id":2,
      "userName": "League of Games",
      "sports": ["Soccer"],
      "highlights": 2
    },
    "3":{
      "._id":3,
      "userName": "UMass Indoor Soccer (Football)"
    },
    "4":{
      "._id":4,
      "userName": "Fury of Balls"
    },
    "5":{
      "._id":5,
      "userName": "Balls of Fury",
      "sports": ["Soccer"]
    }
  },
  "highlightsItems": {
    "1": {
      "_id": 2,
      "rsvpCounter": [4,5],
      "type": "highlightsUpdate",
      "contents": {
        "user": 2,
        "timestamp": 1453668480000,
        "location": "Northampton, MA",
        "contents": "League of Games is pleased to let everyone know that we will be having our first soccer game of the season this Saturday @ 6:00pm in the Southwest fields."
      },
      // List of comments on the post
      "comments": [
        {
          // The user of the comment.
          "user": 4,
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
      // "2": {
      //   "_id": 3,
      //   // A list of users that liked the post. Here, "Someone Else" and "Another Person"
      //   // liked this particular post.
      //   "rsvpCounter": [],
      //   // The type and contents of this highlights item. This item happens to be a status
      //   // update.
      //   "type": "highlightsUpdate",
      //   "contents": {
      //     // ID of the user that posted the status update.
      //     "user": 1,
      //     // 01/24/16 3:48PM EST, converted to Unix Time
      //     // (# of milliseconds since Jan 1 1970 UTC)
      //     // https://en.wikipedia.org/wiki/Unix_time
      //     "timestamp": 1453668480000,
      //     "location": "Northampton, MA",
      //     "contents": "Indoor at 5 today. Boyden Gym."
      //   }
      // }
    },
    // "highlgihts" collection. Highlights for each FB user.
    "highlights": {
      "2": {
        "_id": 2,
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
