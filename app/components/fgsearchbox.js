import React from 'react';
import Fgsearchops from './fgsearchops';
import {matchingGames} from '../server.js';


export default class Fgsearchbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: "",
      maxPlayers: "",
      minAge: "",
      maxAge: "",
      sport: "baseball",
      skillLvl: "beginner",
      foundGames: []};

  }

  onSubmit(sport, location, skillLvl /*, maxPlayers, minAge, maxAge, league*/) {
  // Send to server.
  // We could use geolocation to get a location, but let's fix it to Amherst
  // for now.
  matchingGames(sport, skillLvl, location, (games) => {
    this.setState({foundGames: games});
    // Database is now updated. Redirect to the game page.
    window.alert("Found "+games.length+ " games based on your search");
  });
}


  fgHandler() {

    var locationText = this.state.location.trim();
    /*var maxPlayersText = this.state.maxPlayers.trim();
    var minAgeText = this.state.minAge.trim();
    var maxAgeText = this.state.maxAge.trim();*/
    var sportText = this.state.sport;
    var skillLvlText = this.state.skillLvl;
     // var leagueText = this.state.league;
    if (locationText !== "" && sportText !== "" && skillLvlText !== "") {
      this.onSubmit(sportText, locationText, skillLvlText/*, gameNameText, descriptionText,  dateText, timeText, maxPlayersText, minAgeText, maxAgeText, leagueText */);
    }
    else{
      window.alert("Please fill out all of the required fields!");
    }
  }


  handleChangeSport(e) {
    e.preventDefault();
    this.setState({sport: e.target.value});
  }

  handleChangeSkillLvl(e) {
    e.preventDefault();
    this.setState({skillLvl: e.target.value});
  }

  handleChangeLocation(e) {
    e.preventDefault();
    this.setState({location: e.target.value});
  }


  /*
      var callbackFunction = ()
  //  handleSubmitClick(clickEvent) {
      clickEvent.preventDefault();
        // 0 represents the 'main mouse button' -- typically a left click
      if(clickEvent.button === 0) {
          //callbackFfunction is the cb argument for unlike & Like comment.
        var callbackFunction = (expandCond) => {
        this.setState({expandVal: expandCond })
        };

        if(this.isExpanded()){
        collapseResult(this.state._id,this.state.expandVal, callbackFunction)
        }
        else{
          expandResult(this.state._id, this.state.expandVal, callbackFunction)
        }
      }
    }


    expandResult(){
      this.setState({expandVal: true});
    }

    collapseResult(){
      this.setState({expandVal: false});
    }

    isExpanded() {
      var expandStatus = this.state.expandVal;
      var expanded = false;
      if(expandStatus === true){
        expanded = true;
        break;
      }
      return expanded;
    }





    searchGames()

  }
  */
  render() {

    return (
      <div className="panel-body">
          <div className="form-group row">
              <label htmlFor="sport" className="col-md-3 col-form-label">Sport</label>
              <div className="col-md-9" >
                  <select className="form-control" value={this.state.sport} onChange={(e)=>this.handleChangeSport(e)} >
                    <option value= "baseball">Baseball</option>
                    <option value= "basketball" >Basketball</option>
                    <option value= "hockey ">Hockey</option>
                    <option value= "soccer" >Soccer</option>
                    <option value= "tennis">Tennis</option>
                    <option value= "dodgeball" >Dodgeball</option>
                  </select>
              </div>
          </div>
          <div className="form-group row">
              <label htmlFor="location" className="col-md-3 col-form-label">Location</label>
              <div className="col-md-9">
                  <input className="form-control" type="text" id="location" placeholder="Zip Code or City" value = {this.state.location} onChange={(e) => this.handleChangeLocation(e)}/>
              </div>
          </div>
          <div className="form-group row">
              <label htmlFor="skilllevel" className="col-md-3 col-form-label">Skill Level</label>
              <div className="col-md-9 form-inline centering"  value = {this.state.skillLvl} onChange={(e)=> {this.handleChangeSkillLvl(e)}}>
                  <label hmtlFor="optionbeginner" className="checkbox inline">
                    <input id="optionbeginner" type="checkbox" id="inlineCheckboxBeginner" value="beginner" /> Beginner
                  </label>
                  <label htmlFor="optionnovice" className="checkbox inline">
                    <input id="optionnovice" type="checkbox" id="inlineCheckboxNovice" value="novice" /> Novice
                  </label>
                  <label htmlFor="optionintermediate" className="checkbox inline">
                    <input id="optionintermediate" type="checkbox" id="inlineCheckboxIntermediate" value="intermediate" /> Intermediate
                  </label>
                  <label htmlFor="optionadvanced" className="checkbox inline">
                    <input id="optionadvanced" type="checkbox" id="inlineCheckboxAdvanced" value="advanced" /> Advanced
                  </label>
              </div>
          </div>
            <Fgsearchops>
            </Fgsearchops>
          <p>
              <button type="submit" className="btn pull-right" onClick={(e) => this.fgHandler(e)}>Submit</button>
          </p>
      </div>
    )
  }
}
