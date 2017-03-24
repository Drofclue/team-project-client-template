import React from 'react';

export default class RightSideBar extends React.Component{
  render(){
    return(
      <div class="panel panel-default user-hub">
          <div class="panel-body">
              <div class="row">
                  <div class="col-md-3">
                      <div class="media">
                          <div class="media-body">
                              <img src="img/lingodaddy_profile_pic.jpg" alt="" width="100%" class="img-rounded img-responsive" style="height:60px">
                          </div>
                      </div>
                  </div>
                  <div class="col-md-9">
                      <p class="pull-left">Hello, <a href="#">LingoDaddy_24</a></p>
                  </div>
              </div>
              <hr>
              <div class="row">
                  <div class="col-md-6">
                      <a href="#"><span class="pull-right"><i class="fa fa-fw fa-cog"></i>Settings</span></a>
                  </div>
                  <div class="col-md-6 logout">
                      <a href="#"><span class = "pull-left"><i class="fa fa-fw fa-sign-out"></i>Logout</span></a>
                  </div>
              </div>
          </div>
      </div>
      <div class="panel panel-default suggested-games">
          <div class="panel-body">
              <a href="#">Suggested Games</a>
          </div>
          <div class="panel-footer">
              <div class="row">
                  <div class="col-md-12 ">
                      <ul class="games-list">
                          <li class="media">
                              <div class="media-body">
                                  <div class="game-title">----<a href="#">Not American Football</a>----</div>
                                  <table style="width:100%">
                                      <tr>
                                          <td class="title">League:</td>
                                          <td class="description"><a href="#">Not American Sports</a></td>
                                      </tr>
                                      <tr>
                                          <td class="title">Location:</td>
                                          <td class="description">Amherst, MA</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Skill Level:</td>
                                          <td class="description">Novice-Intermediate</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Date:</td>
                                          <td class="description">6:30 pm 5/15/17</td>
                                      </tr>
                                  </table>
                                  <div class="game-explanation">Because you play Intermediate Soccer.</div>
                              </div>
                          </li>
                          <hr>
                          <li class="media">
                              <div class="media-body">
                                  <div class="game-title">----<a href="#">Not European Football</a>----</div>
                                  <table style="width:100%">
                                      <tr>
                                          <td class="title">League:</td>
                                          <td class="description"><a href="#">American Sports</a></td>
                                      </tr>
                                      <tr>
                                          <td class="title">Location:</td>
                                          <td class="description">Hadley, MA</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Skill Level:</td>
                                          <td class="description">Intermediate-Advanced</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Date:</td>
                                          <td class="description">10:00am 5/19/17</td>
                                      </tr>
                                  </table>
                                  <div class="game-explanation">Because you live near Hadley.</div>
                              </div>
                          </li>
                          <hr>
                          <li class="media">
                              <div class="media-body">
                                  <div class="game-title">----<a href="#">New to Curling</a>----</div>
                                  <table style="width:100%">
                                      <tr>
                                          <td class="title">League:</td>
                                          <td class="description">Independent</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Location:</td>
                                          <td class="description">Easthampton, MA</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Skill Level:</td>
                                          <td class="description">Beginner</td>
                                      </tr>
                                      <tr>
                                          <td class="title">Date:</td>
                                          <td class="description">1:00pm 5/20/17</td>
                                      </tr>
                                  </table>
                                  <div class="game-explanation">Because you play Begginner Curling.</div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
