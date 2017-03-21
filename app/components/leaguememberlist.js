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
                      {React.Children.map(this.props.children, function(child) {
                        return (
                          <li className="media">
                            {child}
                          </li>
                        )
                      })}

                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
