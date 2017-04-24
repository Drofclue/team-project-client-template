import React from 'react';
import LeagueMemberList from './leaguememberlist';

export default class LeagueMemberListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }
  render() {

    return (
      <div className="panel panel-default suggested-games">
        <div className="panel-body">
            <a href="#">League Members</a>
        </div>
        <div className="panel-footer">
            <div className="row">
                <div className="col-md-12 ">
                    <LeagueMemberList name = {this.props.name}>

                    </LeagueMemberList>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
