import React from 'react';
import {matchingGames} from '../server.js';
import Fgresultitem from "./fgresultitem";
import {Link} from 'react-router';

//import Fgresultlist from './fgresultlist';
//import {outputResults} from './fgresultlist';




export function giveGames(){return this.matchedGames}

export default class Fgsearchbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gameName: "",
      description: "",
      date: "",
      time: "",
      currPlayers: "",
      maxPlayers: "",
      loc: "",
      minAge: "",
      maxAge: "",
      sport: "baseball",
      skillLvl: "beginner",
      matchedGames: [],
      gamesfound: false

    };

  }

  onSubmit(sport, skillLvl, loc) {
    matchingGames(sport, skillLvl, loc, (games) => {
      this.setState({matchedGames: games});
      if (this.state.matchedGames) {this.setState({gamesfound: true});}
      window.alert("Found "+games.length+ " games based on your search");

    });


  }



  fgHandler() {
    var sportText = this.state.sport.trim();
    var skillLvlText = this.state.skillLvl.trim();
    var locationText = this.state.loc.trim();

      if (sportText !== "" && skillLvlText !== "" &&locationText !== "") {
        this.onSubmit(sportText, skillLvlText, locationText);
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

    this.setState({skillLvl: e.target.value});
  }

  handleChangeLocation(e) {
    e.preventDefault();
    this.setState({loc: e.target.value});
  }

  componentDidUpdate(preProps) {
    if(preProps.gameid !== this.props.gameid){this.refresh();}
  }

  render() {

    var data = this.state;
    var contents;
    switch(data.gamesfound) {
      case true:

    contents = (
      <div className="panel panel-default panel-results">
        {data.matchedGames.map((game) => {
    return (<div className="card">
       <b><Link to={"/game/"+game._id}>{game.gameName}</Link></b>
      <Fgresultitem gameName={game.gameName} sport={game.sport} description={game.description} location={game.location} time={game.time} curplayers={game.currPlayers} maxplayers={game.maxPlayers}
        ></Fgresultitem>
        </div>
    )
  })}
          </div>

    );
    break;
  default:
    null//window.alert("Search criteria needed...");
}

    return (<div>
      <div className="panel-body">
          <div className="form-group row">
              <label htmlFor="sport" className="col-md-3 col-form-label">Sport *</label>
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
              <label htmlFor="location" className="col-md-3 col-form-label">Location *</label>
              <div className="col-md-9">
                  <input className="form-control" type="text" id="location" placeholder="Zip Code or City" value = {this.state.loc} onChange={(e) => this.handleChangeLocation(e)}/>
              </div>
          </div>
          <div className="form-group row">
              <label htmlFor="skilllevel" className="col-md-3 col-form-label">Skill Level *</label>
              <div className="col-md-9 form-inl]ine centering"  value = {this.state.skillLvl} onChange={(e)=> {this.handleChangeSkillLvl(e)}}>
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

          <p>
              <button type="submit" className="btn pull-right" onClick={(e) => this.fgHandler(e)}>Submit </button>

          </p>
      </div>
      <div className="panel panel-default panel-results">{contents}

      </div>
      </div>
    )
  }
}
