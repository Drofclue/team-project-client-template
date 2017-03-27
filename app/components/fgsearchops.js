import React from 'react';

export default class Fgsearchops extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button className="btn btn-default" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            More Options
          </button>
        </p>
        <div className="collapse" id="collapseExample">
            <div className="card card-block">
                <div className="form-group row">
                    <label htmlFor="league" className="col-md-3 col-form-label">League</label>
                    <div className="col-md-9">
                        <select className="form-control">
                          <option>League1</option>
                          <option>League2</option>
                          <option>League3</option>
                        </select>
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
            </div>
        </div>
    </div>
    )
  }
}
