import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
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
            <div className="container-fluid text-center">
                <div className="row content">
                    <LeftNavBar/>
                    <div className="col-md-7 text-left">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <ScheduleCalendar/>
                            </div>
                        </div>
                    </div>
                    <RightSideBar userData={this.state}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
