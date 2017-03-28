import React from 'react';
import LeftNavBar from './leftnavbar.js';
import Footer from './footer';
import GamePageData from './gamepage-data.js'
import GamePageRightBar from './gamepage-rightbar.js'

export default class GamePage extends React.Component {
  render(){
    return(
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <div className="col-md-7 text-left">
            <GamePageData league="Not American Football" desc= "Not American Football welcomes all people who want to play Fùtbol... except for people who are really good."
            sport="Soccer" location="Amherst, MA" skill="Novice-Intermediate" date="5/15/17" time="6:30pm" partnum="17/30">
            </GamePageData>
          </div>
          <GamePageRightBar />
        </div>
        <Footer />
      </div>
    )
  }
}
