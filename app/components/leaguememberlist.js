import React from 'react';

export default class LeagueMemberList extends React.Component {
  render() {
    return (
      <ul className="members-list">
        {React.Children.map(this.props.children, function(child) {
          return (
            <li className="media">
              {child}
            </li>
          )
        })}

      </ul>
    )
  }
}
