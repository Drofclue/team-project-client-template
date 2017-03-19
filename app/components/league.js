import React from 'react';

export default class League extends React.Component {
  render() {
    return (
      <div>
      <div className="media league-name">
          <div className="media-left">
              <img src="img/middle-aged-bowler.jpg" className="media-object" style={{"width" : "200px"}} />
          </div>
          <div className="media-body">
              <h1 className="media-heading">Middle Aged Bowlers
  <button type="button pull-right" className="btn btn-success">Open</button> </h1>
              <h3 className="media-heading member-count">273 Members</h3>
          </div>
      </div>
      <div>
        <div className="col-md-5">
        <h1 className="sportswe"><u>Sports We Play</u></h1>
        <div className= "sportsweplay">
        <ul type="square" className="sports">
            <li>Bowling <span className="label label-default">Advanced</span></li>
                <li>Walking <span className="label label-default">Beginner- Novice</span></li>
                    <li>Running <span className="label label-default">Intermediate- Advanced</span></li>
                        <li>Hockey <span className="label label-default">Advanced</span></li>
                            <li>Frisbee <span className="label label-default">Beginner</span></li>
        </ul>
      </div>
    </div>
    <div className="col-md-6">
        <div className="container-fluid description">
          <h3><b>Group Description</b></h3>
          <div className="ActDesc">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
    </div>
  </div>
</div>
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
                          <li className="media">
                              <div className="media-left media-top">
                                  <span className="glyphicon glyphicon-time"></span>
                              </div>
                              <div className="media-body">
                                  <a href="#">Sunday February 26th</a>: <i>Bowling against Young Aged Bowlers @ 7:00pm EST; Amherst Bowling Company</i>
                              </div>
                          </li>
                          <li className="media">
                              <div className="media-left media-top">
                                  <span className="glyphicon glyphicon-time"></span>
                              </div>
                              <div className="media-body">
                                  <a href="#">Saturday March 3rd</a>: <i>Walking against Young Aged Walkers @4:00am EST; Umass Amherst Campus</i>
                              </div>
                          </li>
                          <li className="media">
                              <div className="media-left media-top">
                                  <span className="glyphicon glyphicon-time"></span>
                              </div>
                              <div className="media-body">
                                  <a href="#">Thursday April 6th</a>: <i>Running Practice @5:00pm EST; Puffers Pond</i>
                              </div>
                          </li>
                          <li className="media">
                              <div className="media-left media-top">
                                  <span className="glyphicon glyphicon-time"></span>
                              </div>
                              <div className="media-body">
                                  <a href="#">Monday April 25th</a>: <i>Running against Young Aged Runners @ 2:36am EST; Sylvan Walkway</i>
                              </div>
                          </li>
                          <li className="media">
                              <div className="media-left media-top">
                                  <span className="glyphicon glyphicon-time"></span>
                              </div>
                              <div className="media-body">
                                  <a href="#">Tuesday April 27th</a>: <i>Bowling Practice @5:00pm EST; Location TBA</i>
                              </div>
                          </li>
                          <li className="media">
                              <div className="media-left media-top">
                                  <span className="caret"></span>
                              </div>
                              <div className="media-body">
                                  <a href="#">Check Previous Matches</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
