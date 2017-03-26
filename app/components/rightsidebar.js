import React from 'react';

export default class RightSideBar extends React.Component{
  render(){
    return(
          <div>
          <div className="panel panel-default user-hub">
              <div className="panel-body">
                  <div className="row">
                      <div className="col-md-2">
                          <div className="media">
                              <div className="media-body">
                                  <img src="img/lingodaddy_profile_pic_userhub.jpg" alt="" className="img-rounded img-responsive" />
                              </div>
                          </div>
                      </div>
                      <div className="col-md-10">
                          <p className="pull-left">Hello, <a href="#">LingoDaddy_24</a></p>
                      </div>
                  </div>
                  <hr />
                  <div className="row">
                      <div className="col-md-6">
                          <a href="#"><span className="pull-right"><i className="fa fa-fw fa-cog"></i>Settings</span></a>
                      </div>
                      <div className="col-md-6 logout">
                          <a href="#"><span className= "pull-left"><i className="fa fa-fw fa-sign-out"></i>Logout</span></a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="panel panel-default suggested-games">
              <div className="panel-body">
                  <a href="#">Suggested Games</a>
              </div>
              <div className="panel-footer">
                  <div className="row">
                      <div className="col-md-12 ">
                          <ul className="games-list">
                              <li className="media">
                                  <div className="media-body">
                                      <div className="game-title">----<a href="#">Not American Football</a>----</div>
                                      <table style="width:100%">
                                          <tr>
                                              <td className="title">League:</td>
                                              <td className="description"><a href="#">Not American Sports</a></td>
                                          </tr>
                                          <tr>
                                              <td className="title">Location:</td>
                                              <td className="description">Amherst, MA</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Skill Level:</td>
                                              <td className="description">Novice-Intermediate</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Date:</td>
                                              <td className="description">6:30 pm 5/15/17</td>
                                          </tr>
                                      </table>
                                      <div className="game-explanation">Because you play Intermediate Soccer.</div>
                                  </div>
                              </li>
                              <hr />
                              <li className="media">
                                  <div className="media-body">
                                      <div className="game-title">----<a href="#">Not European Football</a>----</div>
                                      <table style="width:100%">
                                          <tr>
                                              <td className="title">League:</td>
                                              <td className="description"><a href="#">American Sports</a></td>
                                          </tr>
                                          <tr>
                                              <td className="title">Location:</td>
                                              <td className="description">Hadley, MA</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Skill Level:</td>
                                              <td className="description">Intermediate-Advanced</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Date:</td>
                                              <td className="description">10:00am 5/19/17</td>
                                          </tr>
                                      </table>
                                      <div className="game-explanation">Because you live near Hadley.</div>
                                  </div>
                              </li>
                              <hr />
                              <li className="media">
                                  <div className="media-body">
                                      <div className="game-title">----<a href="#">New to Curling</a>----</div>
                                      <table style="width:100%">
                                          <tr>
                                              <td className="title">League:</td>
                                              <td className="description">Independent</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Location:</td>
                                              <td className="description">Easthampton, MA</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Skill Level:</td>
                                              <td className="description">Beginner</td>
                                          </tr>
                                          <tr>
                                              <td className="title">Date:</td>
                                              <td className="description">1:00pm 5/20/17</td>
                                          </tr>
                                      </table>
                                      <div className="game-explanation">Because you play Begginner Curling.</div>
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
