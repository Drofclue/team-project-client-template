import React from 'react';

export default class SchedulePlans extends React.Component {
  render() {
    return(

      <div className="col-md-4 plans">

        <h1>Coming</h1>
        <div className="panel panel-default suggested-games">

            <div className="panel-footer">
                <div className="row">
                    <div className="col-md-12 ">
                        <ul className="games-list">
                            <li className="media">
                                <div className="media-body">
                                    <div className="game-title"> ----<a href="#">Not American Football</a>----</div>
                                    <table>
                                      <tbody>
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
                                      </tbody>
                                    </table>

                                </div>
                            </li>
                            <hr />
                            <li className="media">
                                <div className="media-body">
                                    <div className="game-title">----<a href="#">Not European Football</a>----</div>
                                    <table>
                                      <tbody>
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
                                        </tbody>
                                    </table>

                                </div>
                            </li>
                            <hr />
                            <li className="media">
                                <div className="media-body">
                                    <div className="game-title">----<a href="#">New to Curling</a>----</div>
                                    <table>
                                      <tbody>
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
                                      </tbody>
                                    </table>
                                    <hr />
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
