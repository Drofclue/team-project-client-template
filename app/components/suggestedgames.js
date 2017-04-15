import React from 'react';
import SuggestedGamesItem from './suggestedgamesitem';
import {getUserData} from '../server';
export default class SuggestedGames extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      suggestedgames: []
    }
  }

  refresh() {
    getUserData(this.props.userID, (gameData) => {
      this.setState(gameData);
    });
  }

  componentDidMount() {
    this.refresh();
  }

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
                        {
                         this.state.suggestedgames.map((game, i)=> {
                           if(i!==0){
                             return (
                               <div>
                               <hr />
                               <SuggestedGamesItem gameId={this.state.suggestedgames[i]} />
                               </div>
                             );
                           }else{
                             return (
                               <SuggestedGamesItem gameId={this.state.suggestedgames[i]} />
                              );
                            }
                         })
                        }
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
