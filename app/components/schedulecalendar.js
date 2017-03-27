import React from 'react';

export default class ScheduleCalender extends React.Component {
  render() {
    return(
      <div className="col-md-8 calendar">

          <h1>Schedule</h1>

          <div className="month">
              <ul>
                  <li className="prev">❮</li>
                  <li className="next">❯</li>
                  <li className="monthli">
                      Feburary<br />
                    <span className="yearli">2017</span>
                  </li>
              </ul>
          </div>
          <div>
              <table className="textCenter">
                <tbody>
                  <tr>
                      <td className="textColorRed">Sun</td>
                      <td>Mon</td>
                      <td>Tue</td>
                      <td>Wed</td>
                      <td>Thu</td>
                      <td>Fri</td>
                      <td className="textColorBlue">Sat</td>
                  </tr>
                </tbody>
              </table>
              <table id="textLeft">
                <tbody>
                  <tr className="trsize">
                      <td className="textColorRed"></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="textColorRed">1
                      </td>
                      <td className="textColorBlue">2</td>
                  </tr>
                  <tr className="trsize">
                      <td className="textColorRed">3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td className="textColorBlue">9</td>
                  </tr>
                  <tr className="trsize">
                      <td className="textColorRed">10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td className="textColorBlue">16</td>
                  </tr>
                  <tr className="trsize">
                      <td className="textColorRed">17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td className="textColorBlue">23</td>
                  </tr>
                  <tr className="trsize">
                      <td className="textColorRed">24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td className="textColorBlue">30</td>
                  </tr>
                  <tr className="trsize">
                      <td className="textColorRed">31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="textColorBlue"></td>
                  </tr>
                  </tbody>
              </table>
          </div>

          <div className="panel panel-default">
              <div className="panel-body">
                  <div className="form-group row">
                      <label className="col-md-3 col-form-label">Sport</label>
                      <div className="col-md-9">
                          <select className="form-control">
                      <option>Default</option>
                      <option>Baseball</option>
                      <option>Basketball</option>
                      <option>Bowling</option>
                      <option>Football</option>
                      <option>Hockey</option>
                      <option>Soccer</option>
                    </select>
                      </div>
                  </div>
                  <div className="row">

                      <label className="col-md-3 col-form-label">Date</label>

                      <div className="col-md-7">
                          <input className="form-control" type="text" id="date" placeholder="Date"/>

                      </div>
                      <div className="col-md-2">
                          <button type="submit" className="btn pull-right">Submit</button>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    )
  }
}
