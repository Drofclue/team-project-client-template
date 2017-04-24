import React from 'react';

export default class CreateAGameLeagueOptions extends React.Component {
  render() {
    return(
      <div>
        <div className="panel panel-default">
            <div className="panel-body league-options">
                <div className="form-group row">
                    <label htmlFor="privacy" className="col-md-3 col-form-label">Privacy</label>
                    <div className="col-md-9 form-inline centering">
                        <label htmlFor="optionpublic" className="radio inline">
                      <input name="inlineRadioOptions" type="radio" id="inlineRadioPublic" value="optionpublic" /> Public
                    </label>
                        <label htmlFor="optionprivate" className="radio inline">
                      <input name="inlineRadioOptions" type="radio" id="inlineRadioPrivate" value="optionprivate" /> Private
                    </label>
                        <span id="helpBlock" className="help-block">Public games are available for all registered users to join. Private games are only available to members of the associated league.</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="invite" className="col-md-3 col-form-label">Invite Members</label>
                    <div className="col-md-9">
                        <input type="search" className="form-control" placeholder="Search Members..." />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
