import React from 'react';
import LeagueMember from './leaguemember';


export default class LeagueMemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    }
  render() {
    return (
      <ul className="members-list">
        <li className = "media">  {this.props.name ? <LeagueMember name={this.props.name[0] ? this.props.name[0] : ""}/>:""}                </li>

        <li className = "media">     {this.props.name ? <LeagueMember name={this.props.name[1] ? this.props.name[1] : ""}/>:""}              </li>

        <li className = "media">     {this.props.name ? <LeagueMember name={this.props.name[2] ? this.props.name[2] : ""}/>:""}              </li>

          <li className = "media">     {this.props.name ? <LeagueMember name={this.props.name[3] ? this.props.name[3] : ""}/>:""}              </li>
      </ul>
    )
  }
}
