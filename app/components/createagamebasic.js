import React from 'react';

export default class CreateAGameBasic extends React.Component {
  render() {
    return(
      <div>
              <div className="form-group row">
                  <label htmlFor="gameName" className="col-md-3 col-form-label">Game Name</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="gameName" placeholder="Game Name" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="description" className="col-md-3 col-form-label">Description</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="description" placeholder="Description" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="location" className="col-md-3 col-form-label">Location</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="location" placeholder="Zip Code or City" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="date" className="col-md-3 col-form-label">Date</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="date" placeholder="MM/DD/YYYY" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="time" className="col-md-3 col-form-label">Time</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="time" placeholder="00:00 AM/PM" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="players" className="col-md-3 col-form-label">Max. Players</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="players" placeholder="Maximum Number of Players" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="age" className="col-md-3 col-form-label">Age Range</label>
                  <div className="col-md-4">
                      <input className="form-control" type="text" id="agemin" placeholder="Minimum Age" />
                  </div>
                  <div className="col-md-1 centering">
                      to
                  </div>
                  <div className="col-md-4">
                      <input className="form-control" type="text" id="agemax" placeholder="Maximum Age" />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="sport" className="col-md-3 col-form-label">Sport</label>
                  <div className="col-md-9">
                      <select className="form-control">
                        <option>Baseball</option>
                        <option>Basketball</option>
                        <option>Bowling</option>
                        <option>Football</option>
                        <option>Hockey</option>
                        <option>Soccer</option>
                      </select>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="skilllevel" className="col-md-3 col-form-label">Skill Level</label>
                  <div className="col-md-9 form-inline centering">
                      <label htmlFor="optionbeginner" className="checkbox inline">
                        <input type="checkbox" id="inlineCheckboxBeginner" value="optionbeginner" /> Beginner
                      </label>
                      <label htmlFor="optionnovice" className="checkbox inline">
                        <input type="checkbox" id="inlineCheckboxNovice" value="optionnovice" /> Novice
                      </label>
                      <label htmlFor="optionintermediate" className="checkbox inline">
                        <input type="checkbox" id="inlineCheckboxIntermediate" value="optionintermediate" /> Intermediate
                      </label>
                      <label htmlFor="optionadvanced" className="checkbox inline">
                        <input type="checkbox" id="inlineCheckboxAdvanced" value="optionadvanced" /> Advanced
                      </label>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="league" className="col-md-3 col-form-label">League</label>
                  <div className="col-md-9">
                      <select className="form-control">
                        <option>No League</option>
                        <option>Middle-Aged Bowling</option>
                        <option>My Really Cool League</option>
                      </select>
                  </div>
              </div>


          </div>
    )
  }
}
