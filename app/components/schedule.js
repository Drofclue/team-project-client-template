import React from 'react';
import LeftNavBar from './leftnavbar';
import RightSideBar from './rightsidebar';
import Footer from './footer.js';
import ScheduleCalendar from './schedulecalendar.js';
import SchedulePlans from './scheduleplans.js';

export default class Schedule extends React.Component {
  render(){
    return (
      <div className="container-fluid text-center">
        <div className="row content">
          <LeftNavBar />
          <div className="col-md-7 text-left">
              <div className="panel panel-default">
               <div className="panel-body">
                <ScheduleCalendar />
                <SchedulePlans />
                </div>
              </div>
          </div>
          <RightSideBar />
        </div>
        <Footer />
      </div>
    )
  }
}
