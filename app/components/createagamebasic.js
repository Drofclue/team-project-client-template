import React from 'react';

export default class CreateAGameBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      description: "",
      location: "",
      date: "",
      time: "",
      maxPlayers: "",
      minAge: "",
      maxAge: "",
      sport: "baseball",
      skillLvl: "beginner",
      league: ""
    };
  }

  handleSubmit(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var gameNameText = this.state.gameName.trim();
    var descriptionText = this.state.description.trim();
    var locationText = this.state.location.trim();
    var dateText = this.state.date.trim();
    var timeText = this.state.time.trim();
    var maxPlayersText = this.state.maxPlayers.trim();
    var minAgeText = this.state.minAge.trim();
    var maxAgeText = this.state.maxAge.trim();
    var sportText = this.state.sport;
    var skillLvlText = this.state.skillLvl;
    var leagueText = this.state.league;
    if (gameNameText !== "" && descriptionText !== "" && locationText !== "" && dateText !== "" && timeText !== "" && maxPlayersText !== "" && minAgeText !== "" && maxAgeText !== "" && sportText !== "" && skillLvlText !== "") {
      this.props.onSubmit(gameNameText, descriptionText, locationText, dateText, timeText, maxPlayersText, minAgeText, maxAgeText, sportText, skillLvlText, leagueText);
    }
    else{
      window.alert("Please fill out all of the required fields!");
    }
  }

  handleChangeGameName(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    this.setState({gameName: e.target.value});
  }

  handleChangeDescription(e) {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  handleChangeLocation(e) {
    e.preventDefault();
    this.setState({location: e.target.value});
  }

  handleChangeDate(e) {
    e.preventDefault();
    this.setState({date: e.target.value});
  }

  handleChangeTime(e) {
    e.preventDefault();
    this.setState({time: e.target.value});
  }

  handleChangeMaxPlayers(e) {
    e.preventDefault();
    this.setState({maxPlayers: e.target.value});
  }

  handleChangeMinAge(e) {
    e.preventDefault();
    this.setState({minAge: e.target.value});
  }

  handleChangeMaxAge(e) {
    e.preventDefault();
    this.setState({maxAge: e.target.value});
  }

  handleChangeSport(e) {
    e.preventDefault();
    this.setState({sport: e.target.value});
  }

  handleChangeSkillLvl(e) {
    e.preventDefault();
    this.setState({skillLvl: e.target.value});
  }

  render() {
    return(
      <div>
              <div className="form-group row">
                  <label htmlFor="gameName" className="col-md-3 col-form-label">Game Name</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="gameName" placeholder="Game Name" value={this.state.gameName} onChange={(e) => this.handleChangeGameName(e)} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="description" className="col-md-3 col-form-label">Description</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="description" placeholder="Description" value={this.state.description} onChange={(e) => this.handleChangeDescription(e)} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="location" className="col-md-3 col-form-label">Location</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="location" placeholder="Zip Code or City" value={this.state.location} onChange={(e) => this.handleChangeLocation(e)} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="date" className="col-md-3 col-form-label">Date</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="date" placeholder="MM/DD/YYYY"  value={this.state.date} onChange={(e) => this.handleChangeDate(e)}/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="time" className="col-md-3 col-form-label">Time</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="time" placeholder="00:00 AM/PM"  value={this.state.time} onChange={(e) => this.handleChangeTime(e)}/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="maxPlayers" className="col-md-3 col-form-label">Max. Players</label>
                  <div className="col-md-9">
                      <input className="form-control" type="text" id="maxPlayers" placeholder="Maximum Number of Players"  value={this.state.maxPlayers} onChange={(e) => this.handleChangeMaxPlayers(e)}/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="age" className="col-md-3 col-form-label">Age Range</label>
                  <div className="col-md-4">
                      <input className="form-control" type="text" id="agemin" placeholder="Minimum Age"  value={this.state.minAge} onChange={(e) => this.handleChangeMinAge(e)}/>
                  </div>
                  <div className="col-md-1 centering">
                      to
                  </div>
                  <div className="col-md-4">
                      <input className="form-control" type="text" id="agemax" placeholder="Maximum Age"  value={this.state.maxAge} onChange={(e) => this.handleChangeMaxAge(e)}/>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="sport" className="col-md-3 col-form-label">Sport</label>
                  <div className="col-md-9">
                      <select className="form-control" value={this.state.sport} onChange={this.handleChangeSport}>
                        <option value="baseball">Baseball</option>
                        <option value="basketball">Basketball</option>
                        <option value="bowling">Bowling</option>
                        <option value="football">Football</option>
                        <option value="hockey">Hockey</option>
                        <option value="soccer">Soccer</option>
                      </select>
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="skilllevel" className="col-md-3 col-form-label">Skill Level</label>
                    <div className="col-md-9">
                        <select className="form-control" value={this.state.skillLvl} onChange={this.handleChangeSkillLvl}>
                          <option value="beginner">Beginner</option>
                          <option value="novice">Novice</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                    </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="league" className="col-md-3 col-form-label">League</label>
                  <div className="col-md-9">
                      <select className="form-control" value={this.state.league} onChange={this.handleChangeLeague}>
                        <option value="">No League</option>
                        <option value="middle-aged bowling">Middle-Aged Bowling</option>
                        <option value="my really cool league">My Really Cool League</option>
                      </select>
                  </div>
              </div>
            <button type="submit" className="btn pull-right" onClick={(e) => this.handleSubmit(e)}>Submit</button>

          </div>
    )
  }
}
