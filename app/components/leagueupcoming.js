import React from 'react';

export default class Leagueupcoming extends React.Component {
  render() {
    return (
      <div>
      <div className="row">
          <div className="col-md-12 upcoming-games">
              <div className="row">
                  <div className="col-md-4 upcoming-games-title">
                      Upcoming Games
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                      <ul className="media-list">
                      {React.Children.map(this.props.children, function(child) {
                          return (
                            <li className="media">
                            {child}
                            </li>
                          )
     })}
   </ul>

                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
