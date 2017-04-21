import React from 'react';

export default class ScheduleCalendar extends React.Component {
    render() {
        return (
            <div>
                <div id="calendar-container">
                    <h1 className="header">Calendar</h1>
                    <div id="calendar-header">
                        <span id="calendar-month-year"></span>
                    </div>

                    <div id="calendar-dates"></div>

                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Event Details</h4>
                                </div>
                                <div className="modal-body">
                                    <p id="modalText"></p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="modal fade" id="myModal2" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Edit Event</h4>
                                </div>
                                <div className="modal-body">
                                    <textarea className="form-control" id="editEvent"></textarea>
                                </div>
                                <div id="saveButton"></div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="modal fade" id="myModal3" role="dialog">
                        <div className="modal-dialog">

                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Create Event</h4>
                                </div>
                                <div className="modal-body">
                                    <textarea className="form-control" id="createEvent"></textarea>
                                </div>
                                <div id="addButton"></div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="form-group row">
                            <label className="col-md-3 col-form-label">Sport</label>
                            <div className="col-md-9">
                                <select className="form-control">
                                    <option>Default</option>
                                    <option>Baseball</option>
                                    <option>Basketball</option>
                                    <option>Bowling</option>
                                    <option>Football</option>
                                    <option>Hockey</option>
                                    <option>Soccer</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">

                            <label className="col-md-3 col-form-label">Date</label>

                            <div className="col-md-7">
                                <input className="form-control" type="text" id="date" placeholder="MM-DD-2017"/>

                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn pull-right">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
