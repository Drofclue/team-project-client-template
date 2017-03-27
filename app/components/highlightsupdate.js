import React from 'react';

export default class HighlightsUpdate extends React.Component{
  render(){
    return(
      <div>
        <div className="row">
            <div className="col-md-10">
                <div className="media">
                    <div className="media-left media-top">
                        <div className="cd-timeline-img">
                            <img src={this.props.avatar} width="50" height="50" alt="Picture" />
                        </div>
                    </div>
                    <div className="media-body">
                        <a href="#">{this.props.author}</a>
                        <br /> {this.props.postDate} · {this.props.location} ·
                        <span className="glyphicon glyphicon-user"></span>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <span className="caret pull-right"></span>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
              {this.props.children}
            </div>
        </div>
    </div>
    )
  }
}
