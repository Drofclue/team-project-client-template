import {readDocument, writeDocument, addDocument} from './database.js'; //eslint-disable-line no-unused-vars

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */

function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}


/**
 * Expand the resultItem by changing the state of the expandVal
 * Provides an updated expandVal in the response.
 */
 function getHighlightsItemSync(highlightsItemId) {
    var highlightsItem = readDocument('highlightsItems', highlightsItemId);
    // Resolve 'rsvp' counter.
    highlightsItem.rsvpCounter =
      highlightsItem.rsvpCounter.map((id) => readDocument('users', id));
    // Assuming a StatusUpdate. If we had other types of
    // highlightsItems in the DB, we would
    // need to check the type and have logic for each type.
    highlightsItem.contents.user =
      readDocument('users', highlightsItem.contents.user);
    // Resolve comment author.
    highlightsItem.comments.forEach((comment) => {
      comment.user = readDocument('users', comment.user);
    });
    return highlightsItem;
  }

  /**
   * Emulates a REST call to get the highlights data for a particular user.
   * @param user The ID of the user whose highlights we are requesting.
   * @param cb A Function object, which we will invoke when the highlights's data is available.
   */
  export function getHighlightsData(user, cb) {
    //console.log(user);
    // Get the User object with the id "user".
    var userData = readDocument('users', user);
    // Get the highlights object for the user.
    var highlightsData = readDocument('highlights', userData.highlights);
    // Map the highlights's highlightsItem references to actual highlightsItem objects.
    // Note: While map takes a callback function as an argument, it is
    // synchronous, not asynchronous. It calls the callback immediately.
    highlightsData.contents = highlightsData.contents.map(getHighlightsItemSync);
    // Return highlightsData with resolved references.
    // emulateServerReturn will emulate an asynchronous server operation, which
    // invokes (calls) the "cb" function some time in the future.
    emulateServerReturn(highlightsData, cb);
  }
  export function postComment(highlightsItemId, author, contents, cb) {
    // Since a CommentThread is embedded in a HighlightsItem object,
    // we don't have to resolve it. Read the document,
    // update the embedded object, and then update the
    // document in the database.
    var highlightsItem = readDocument('highlightsItems', highlightsItemId);
    highlightsItem.comments.push({
      "author": author,
      "contents": contents,
      "postDate": new Date().getTime()
    });
    writeDocument('highlightsItems', highlightsItem);
    // Return a resolved version of the highlights item so React can
    // render it.
    emulateServerReturn(getHighlightsItemSync(highlightsItemId), cb);
  }
  /**
   * Updates a highlights item's rsvpCounter by adding the user to the rsvpCounter.
   * Provides an updated rsvpCounter in the response.
   */
  export function rsvpHighlightsItem(highlightsItemId, userId, cb) {
    var highlightsItem = readDocument('highlightsItems', highlightsItemId);
    // Normally, we would check if the user already rsvpd this comment.
    // But we will not do that in this mock server.
    // ('push' modifies the array by adding userId to the end)
    highlightsItem.rsvpCounter.push(userId);
    writeDocument('highlightsItems', highlightsItem);
    // Return a resolved version of the rsvpCounter
    emulateServerReturn(highlightsItem.rsvpCounter.map((userId) => readDocument('users', userId)), cb);
  }

  /**
   * Updates a highlights item's rsvpCounter by removing the user from the rsvpCounter.
   * Provides an updated rsvpCounter in the response.
   */
  export function unrsvpHighlightsItem(highlightsItemId, userId, cb) {
    var highlightsItem = readDocument('highlightsItems', highlightsItemId);
    // Find the array index that contains the user's ID.
    // (We didn't *resolve* the HighlightsItem object, so it is just an array of user IDs)
    var userIndex = highlightsItem.rsvpCounter.indexOf(userId);
    // -1 means the user is *not* in the rsvpCounter, so we can simply avoid updating
    // anything if that is the case: the user already doesn't rsvp the item.
    if (userIndex !== -1) {
      // 'splice' removes items from an array. This removes 1 element starting from userIndex.
      highlightsItem.rsvpCounter.splice(userIndex, 1);
      writeDocument('highlightsItems', highlightsItem);
    }
    // Return a resolved version of the rsvpCounter
    emulateServerReturn(highlightsItem.rsvpCounter.map((userId) => readDocument('users', userId)), cb);
  }
