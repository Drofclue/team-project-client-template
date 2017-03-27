import React from 'react';
import LeagueMemberList from './leaguememberlist';
import LeagueMember from './leaguemember';

export default class LeagueMemberListItem extends React.Component {
  render() {
    return (
      <div className="panel panel-default suggested-games">
        <div className="panel-body">
            <a href="#">League Members</a>
        </div>
        <div className="panel-footer">
            <div className="row">
                <div className="col-md-12 ">
                    <LeagueMemberList>
                      <LeagueMember name="Some Person"></LeagueMember>
                      <LeagueMember name="Another Person"></LeagueMember>
                      <LeagueMember name="Someone Else"></LeagueMember>
                      <LeagueMember name="Yet Another"></LeagueMember>
                      <LeagueMember name="Last One"></LeagueMember>
                    </LeagueMemberList>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
