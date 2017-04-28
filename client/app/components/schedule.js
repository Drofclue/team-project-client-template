import React from 'react';
import ScheduleCalendar from './schedulecalendar.js';


export default class Schedule extends React.Component {
  constructor(props){
    super(props)
    this.state = props;
  }

    render() {
        return (
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <ScheduleCalendar/>
                            </div>
                        </div>
        )
    }
}
