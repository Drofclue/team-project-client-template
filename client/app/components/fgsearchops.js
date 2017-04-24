import React from 'react';

export default class Fgsearchops extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      opMaxPlayers: "",
      opMinAge: "",
      opMaxAge: "",
      opLeague: "",
      showOps: false};
  }


  opsHandler(e) {
    e.preventDefault();
    this.setState({showOps: (!this.state.showOps)});
    }


    handleChangeLeague(e) {
      this.setState({opLeague: e.target.value});
    }

    handleChangeMaxPlayers(e) {
      this.setState({opMaxPlayers: e.target.value});
    }

    handleChangeMinAge(e) {
      this.setState({opMinAge: e.target.value});
    }

    handleChangeMaxAge(e) {
      this.setState({opMaxAge: e.target.value});
    }






  render() {
    var data = this.state;
    var contents;
    switch(data.showOps) {
      case true:
    //  Display the search options box
    contents = (

                      <div className="card card-block">
                          <div className="form-group row">
                              <label htmlFor="league" className="col-md-3 col-form-label">League</label>
                              <div className="col-md-9">
                                  <select className="form-control" value={this.state.opLeague} onChange={(e)=>this.handleChangeLeague(e)}>
                                    <option>n/a</option>
                                    <option>League1</option>
                                    <option>League2</option>
                                    <option>League3</option>
                                  </select>
                              </div>
                          </div>

                          <div className="form-group row">
                              <label htmlFor="players" className="col-md-3 col-form-label">Max. Players</label>
                              <div className="col-md-4 selectContainer" >
                                    <select className="form-control"  value={this.state.opMaxPlayers} onChange={(e)=>this.handleChangeMaxPlayers(e)} >
                                      <option>n/a</option>
                                      <option>2</option>
                                      <option>4</option>
                                      <option>6</option>
                                      <option>8</option>
                                      <option>10</option>
                                      <option>12</option>
                                      <option>14</option>
                                      <option>16</option>
                                      <option>20</option>
                                      <option>30</option>
                                    </select>
                              </div>
                          </div>
                          <div className="form-group row">
                              <label htmlFor="age" className="col-md-3 col-form-label">Age Range</label>
                              <div className="col-md-4">
                                  <select className="form-control"  value={this.state.opMinAge} onChange={(e)=>this.handleChangeMinAge(e)}>
                                    <option>n/a</option>
                                    <option>18</option>
                                    <option>21</option>
                                    <option>25</option>
                                    <option>30</option>
                                    <option>35</option>
                                    <option>40</option>
                                    <option>45</option>
                                    <option>50</option>
                                    <option>55</option>
                                    <option>60</option>
                                    <option>65</option>
                                    <option>70</option>
                                  </select>
                              </div>
                              <div className="col-md-1 centering"> to </div>
                              <div className="col-md-4">
                                  <select className="form-control" placeholder="Maximum Age" value={this.state.opMaxAge} onChange={(e)=>this.handleChangeMaxAge(e)}>
                                    <option>n/a</option>
                                    <option>18</option>
                                    <option>21</option>
                                    <option>25</option>
                                    <option>30</option>
                                    <option>35</option>
                                    <option>40</option>
                                    <option>45</option>
                                    <option>50</option>
                                    <option>55</option>
                                    <option>60</option>
                                    <option>65</option>
                                    <option>70</option>
                                  </select>
                              </div>
                          </div>
                      </div>

    );
    break;
    default:
    null; //window.alert("Search criteria needed...");
    }


    return (
      <div>
          <button className="btn btn-default" type="button" data-toggle="collapse"
            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={(e) => this.opsHandler(e)}> More Options </button>

          <div> {contents} </div>
    </div>
    )
  }
}
