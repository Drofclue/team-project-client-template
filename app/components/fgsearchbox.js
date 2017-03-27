import React from 'react';
import Fgsearchops from './fgsearchops';

export default class Fgsearchbox extends React.Component {
  render() {
    return (
      <div className="panel-body">
          <div className="form-group row">
              <label htmlFor="sport" className="col-md-3 col-form-label">Sport</label>
              <div className="col-md-9">
                  <select className="form-control">
                    <option>Baseball</option>
                    <option>Basketball</option>
                    <option>Hockey</option>
                    <option>Soccer</option>
                    <option>Tennis</option>
                    <option>Dodgeball</option>
                  </select>
              </div>
          </div>
          <div className="form-group row">
              <label htmlFor="location" className="col-md-3 col-form-label">Location</label>
              <div className="col-md-9">
                  <input className="form-control" type="text" id="location" placeholder="Zip Code or City" />
              </div>
          </div>
          <div className="form-group row">
              <label htmlFor="skilllevel" className="col-md-3 col-form-label">Skill Level</label>
              <div className="col-md-9 form-inline centering">
                  <label hmtlFor="optionbeginner" className="checkbox inline">
                    <input id="optionbeginner" type="checkbox" id="inlineCheckboxBeginner" value="optionbeginner" /> Beginner
                  </label>
                  <label htmlFor="optionnovice" className="checkbox inline">
                    <input id="optionnovice" type="checkbox" id="inlineCheckboxNovice" value="optionnovice" /> Novice
                  </label>
                  <label htmlFor="optionintermediate" className="checkbox inline">
                    <input id="optionintermediate" type="checkbox" id="inlineCheckboxIntermediate" value="optionintermediate" /> Intermediate
                  </label>
                  <label htmlFor="optionadvanced" className="checkbox inline">
                    <input id="optionadvanced" type="checkbox" id="inlineCheckboxAdvanced" value="optionadvanced" /> Advanced
                  </label>
              </div>
          </div>
          <p>
            <Fgsearchops>
            </Fgsearchops>
          </p>
          <p>
              <a className="btn btn-primary pull-right" data-toggle="collapse" href="#find-results" aria-expanded="false" aria-controls="find-results">
                Submit
              </a>
          </p>
      </div>
    )
  }
}
