import React from 'react';
import ReactDOM from 'react-dom';

// Need to create initalized data for each instance or entity from the ER Diagram ?
var initialData = {
  // The "user" collection. Contains all of the users in our CheryPicker system.
  "users": {
    // This user has id "1".
    "1": {
      "_id": 1,
      "fullName": "Xlax Motrax",
      "feed": 1
    },
    "2": {
      "_id": 2,
      "fullName": "Sportin Errayday",
      "feed": 2
    },
    "3": {
      "_id": 3,
      "fullName": "Gamein Forva",
      "feed": 3
    },
    // This is "you"!
    "4": {
      "_id": 4,
      "fullName": "Lingo Daddy42",
      // ID of your feed.
      "feed": 4
    }
  },
  // The 'feedItems' collection. Contains all of the feed items on our Facebook
  // system.
  "feedItems": {
    "1": {
      "_id": 1,
      // A list of users that liked the post. Here, "Someone Else" and "Another Person"
      // liked this particular post.
      "likeCounter": [
        2, 3
      ],
      // The type and contents of this feed item. This item happens to be a status
      // update.
      "type": "statusUpdate",
      "contents": {
        // ID of the user that posted the status update.
        "author": 1,
        // 01/24/16 3:48PM EST, converted to Unix Time
        // (# of milliseconds since Jan 1 1970 UTC)
        // https://en.wikipedia.org/wiki/Unix_time
        "postDate": 1453668480000,
        "location": "Austin, TX",
        "contents": "ugh."
      },
      // List of comments on the post
      "comments": [
        {
          // The author of the comment.
          "author": 2,
          // The contents of the comment.
          "contents": "hope everything is ok!",
          // The date the comment was posted.
          // 01/24/16 22:00 EST
          "postDate": 1453690800000,
          "likeCounter":[]
        },
        {
          "author": 3,
          "contents": "sending hugs your way",
          "postDate": 1453690800000,
          "likeCounter":[]
        }
      ]
    }
  },
  // "feeds" collection. Feeds for each FB user.
  "feeds": {
    "4": {
      "_id": 4,
      // Listing of FeedItems in the feed.
      "contents": [1]
    },
    "3": {
      "_id": 3,
      "contents": []
    },
    "2": {
      "_id": 2,
      "contents": []
    },
    "1": {
      "_id": 1,
      "contents": []
    }
  }
};
