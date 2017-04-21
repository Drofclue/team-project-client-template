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

              <li>  {this.props.sports ? <Leaguesport sport={this.props.sports[0] ? this.props.sports[0] : "No Sport!"} skill={this.props.skills[0] ? this.props.skills[0] : "No Skill Level"} />:""}                </li>

              <li>     {this.props.sports ? <Leaguesport sport={this.props.sports[1] ? this.props.sports[1] : "No Sport!"} skill={this.props.skills[1] ? this.props.skills[1] : "No Skill Level"}/>:""}              </li>

              <li>     {this.props.sports ? <Leaguesport sport={this.props.sports[2] ? this.props.sports[2] : "No Sport!"} skill={this.props.skills[2] ? this.props.skills[2] : "No Skill Level"}/>:""}              </li>

                <li>     {this.props.sports ? <Leaguesport sport={this.props.sports[3] ? this.props.sports[3] : "No Sport!"} skill={this.props.skills[3] ? this.props.skills[3] : "No Skill Level"}/>:""}              </li>

        </ul>
    )
  }
}
