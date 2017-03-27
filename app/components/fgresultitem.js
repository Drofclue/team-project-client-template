import React from 'react';

export default class Fgresultitem extends React.Component {
  render() {
    return (
        <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
                <div className="card-header" role="tab" id={this.headerid}>
                    <h5 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion" href={'#'+this.props.collapseid} aria-expanded="true" aria-controls="collapseOne">
                      {this.props.gamename} </a>
                    </h5>
                </div>
                <div id={this.props.collapseid} className="collapse" role="tabpanel" aria-labelledby={this.headerid}>
                    <div className="card-block card-results">
                        <b>{this.props.gamename}</b>
                        <div className="card-block card-results ">
                                <div className="block">
                                    <span className="label label-default-cherry">Sport</span>: {this.props.sport}
                                </div>
                                <div className="block">
                                    <span className="label label-default-cherry">Location</span>: {this.props.location}
                                </div>
                                <div className="block">
                                    <span className="label label-default-cherry">Time</span>: {this.props.time}
                                </div>
                                <div className="block">
                                    <span className="label label-default-cherry"># of Players</span>:{this.props.curplayers} of {this.props.maxplayers}
                                </div>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    )
  }
}
