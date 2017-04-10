import React from 'react';
import SuggestedGamesItem from './suggestedgamesitem';
export default class SuggestedGames extends React.Component{
  constructor(props){
    super(props);
    this.state=props;
  }

  render(){
    var game1 = (typeof this.props.suggestedgames !== "undefined") ? this.props.suggestedgames[0] : 1;
    var game2 = (typeof this.props.suggestedgames !== "undefined") ? this.props.suggestedgames[1] : 2;
    var game3 = (typeof this.props.suggestedgames !== "undefined") ? this.props.suggestedgames[2] : 3;
    return(
      <div className="panel panel-default suggested-games">
          <div className="panel-body">
              <a href="#">Suggested Games</a>
          </div>
          <div className="panel-footer">
              <div className="row">
                  <div className="col-md-12 ">
                      <ul className="games-list">
                        <SuggestedGamesItem gameId={game1} />
                        <hr />
                        <SuggestedGamesItem gameId={game2} />
                        <hr />
                        <SuggestedGamesItem gameId={game3} />
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
