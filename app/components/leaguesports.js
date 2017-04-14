import React from 'react';

export default class Leaguesports extends React.Component {
  render() {

    return (
        <ul type="square" className="sports">
        {React.Children.map(this.props.children, function(child) {
            return (
              <li>
                {child}
              </li>
            )
          })}
        </ul>
    )
  }
}
