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
    // Resolve 'like' counter.
    highlightsItem.likeCounter =
      highlightsItem.likeCounter.map((id) => readDocument('users', id));
    // Assuming a StatusUpdate. If we had other types of
    // highlightsItems in the DB, we would
    // need to check the type and have logic for each type.
    highlightsItem.contents.author =
      readDocument('users', highlightsItem.contents.author);
    // Resolve comment author.
    highlightsItem.comments.forEach((comment) => {
      comment.author = readDocument('users', comment.author);
    });
    return highlightsItem;
  }

  /**
   * Emulates a REST call to get the highlights data for a particular user.
   * @param user The ID of the user whose highlights we are requesting.
   * @param cb A Function object, which we will invoke when the highlights's data is available.
   */
  export function getHighlightsData(user, cb) {
    // Get the User object with the id "user".
    var userData = readDocument('users', user);
    // Get the highlights object for the user.
    var highlightsData = readDocument('highlightss', userData.highlights);
    // Map the highlights's highlightsItem references to actual highlightsItem objects.
    // Note: While map takes a callback function as an argument, it is
    // synchronous, not asynchronous. It calls the callback immediately.
    highlightsData.contents = highlightsData.contents.map(getHighlightsItemSync);
    // Return highlightsData with resolved references.
    // emulateServerReturn will emulate an asynchronous server operation, which
    // invokes (calls) the "cb" function some time in the future.
    emulateServerReturn(highlightsData, cb);
  }

// export function expandFgResult(fgResultId, expandVal, cb) {
//   var resultItem = readDocument('fgResultList', fgResultId);
//   resultItem.expandResult;
//   writeDocument('fgResultList', resultItem);
//   // Return a resolved version of the likeCounter
//   emulateServerReturn(resultItem.expandVal, cb);
// }
//
// /**
//  * Compress the resultItem by changing the state of the expandVal
//  * Provides an updated expandVal in the response.
//  */
// export function compressFgResult(fgResultId, expandVal, cb) {
//
//   var resultItem = readDocument('fgResultList', fgResultId);
//   // Find the array index that contains the user's ID.
//   // (We didn't *resolve* the highlightsItem object, so it is just an array of user IDs)
//   var expandStatus = resultItem.expandVal;
//   // -1 means the user is *not* in the likeCounter, so we can simply avoid updating
//   // anything if that is the case: the user already doesn't like the item.
//   if (expandStatus === true) {
//     // calls the expandResult Function defined in fgresultitem
//     resultItem.collapseResult;
//     writeDocument('fgResultList', resultItem);
//   }
//   // Return a resolved version of the likeCounter
//
//   // Don't know how this emulate server return works, so not sure how to fit it in with our use needs
//   emulateServerReturn(resultItem.expandVal, cb);
// }
//
// export function createGame(gameName, description, location, date, time, user, maxPlayers, minAge, maxAge, sport, skillLvl, league) {
//   var newGame = {
//     "gameName": gameName,
//     "description": description,
//     "location": location,
//     "date": date,
//     "time": time,
//     "currPlayers": [user],
//     "maxPlayers": maxPlayers,
//     "minAge": minAge,
//     "maxAge": maxAge,
//     "sport": sport,
//     "skillLvl": skillLvl,
//     "league": league
//   };
//
//   // Add the game to the database.
//   // Returns the game w/ an ID assigned.
//   newGame = addDocument('games', newGame);
//
// }
