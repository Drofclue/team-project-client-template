import React from 'react';


var d = new Date();
var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = d.getMonth();
var year = d.getFullYear();



function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    //row for the day letters
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //create 2nd rownext
    tr = document.createElement('tr');

    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }

    var count = 1;
    for(; c<=6; c++){
        var currid = count + '-' + month_name[month] + '-' + year;
        var td = document.createElement('td');
        td.innerHTML = '<button type="button" class="btn btn-secondary btn-lg btn-block" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
        if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
        }
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var currid = count + '-' + month_name[month] + '-' + year;
            var td = document.createElement('td');
            td.innerHTML = '<button type="button" class="btn btn-secondary btn-lg btn-block" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';

            if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
            }
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	return table;
}


export default class ScheduleCalendar extends React.Component {

  componentDidMount()
  {
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    document.getElementById("calendar-dates").appendChild(calendar);
  }
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
