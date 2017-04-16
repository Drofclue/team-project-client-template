import React from 'react';
import Leaguesport from './leaguesport';


export default class Leaguesports extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    }

  render() {

    return (
        <ul type="square" className="sports">

              <li>  {this.props.sports ? <Leaguesport sport={this.props.sports[0]} skill={this.props.skills[0]} />:""}                </li>

              <li>     {this.props.sports ? <Leaguesport sport={this.props.sports[1]} skill={this.props.skills[1]}/>:""}              </li>

              <li>     {this.props.sports ? <Leaguesport sport={this.props.sports[2]} skill={this.props.skills[2]}/>:""}              </li>

        </ul>
    )
  }
}
