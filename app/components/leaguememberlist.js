import React from 'react';

export default class LeagueMemberList extends React.Component {
  render() {
    return (
      <div>
        <div className="panel-body">
            <a href="#">League Members</a>
        </div>
        <div className="panel-footer">
            <div className="row">
                <div className="col-md-12 ">
                    <ul className="members-list">
                        <li className="media">
                            <div className="media-top media-left">
                                PIC
                            </div>
                            <div className="media-body">
                                <a href="#">Some Person</a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-top media-left">
                                PIC
                            </div>
                            <div className="media-body">
                                <a href="#">Another Person</a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-top media-left">
                                PIC
                            </div>
                            <div className="media-body">
                                <a href="#">Someone Else</a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-top media-left">
                                PIC
                            </div>
                            <div className="media-body">
                                <a href="#">Yet Another</a>
                            </div>
                        </li>
                        <li className="media">
                            <div className="media-top media-left">
                                PIC
                            </div>
                            <div className="media-body">
                                <a href="#">Last One</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
