import React from 'react';
import SuggestedGamesItem from './suggestedgamesitem';
export default class SuggestedGames extends React.Component{
  render(){
    return(
      <div className="panel panel-default suggested-games">
          <div className="panel-body">
              <a href="#">Suggested Games</a>
          </div>
          <div className="panel-footer">
              <div className="row">
                  <div className="col-md-12 ">
                      <ul className="games-list">
                        <SuggestedGamesItem gamename="Not American Football" leaguename="Not American Sports" location="Amherst,MA" skilllvl="Novice-Intermediate" date="6:30 pm 5/15/17" explanation="Because you play Intermediate Soccer" />
                        <hr />
                        <SuggestedGamesItem gamename="Not Eruopean Football" leaguename="American Sports" location="Hadley, MA" skilllvl="Intermediate-Advanced" date="10:00am 5/19/17" explanation="Because you live near Hadley" />
                        <hr />
                        <SuggestedGamesItem gamename="New to Curling" leaguename="Independent" location="Easthampton, MA" skilllvl="Beginner" date="1:00pm 5/20/17" explanation="Because you play Beginner Curling" />
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
