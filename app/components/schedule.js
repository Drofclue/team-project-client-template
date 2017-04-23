import React from 'react';
import ScheduleCalendar from './schedulecalendar.js';
import {getUserData} from '../server';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    refresh() {
        getUserData(this.props.user, (userData) => {
            this.setState(userData);
        });
    }
    componentDidMount() {
        this.refresh();
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
