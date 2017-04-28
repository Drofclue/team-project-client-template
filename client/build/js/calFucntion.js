
function eventadd(clickedid){
    if (localStorage.getItem(clickedid) == undefined || localStorage.getItem(clickedid).equals(null)) {
        document.getElementById("addButton").innerHTML = '<div><button onclick="eventcreate(this.id)" class="btn btn-default addevent-' + clickedid + '" id="' + clickedid + '">Create</button></div><br>';
        $('#myModal3').modal('show');
    }
}

function eventcreate(clickedid) {
    if (localStorage.getItem(clickedid) == undefined || localStorage.getItem(clickedid).equals(null)) {
        var a = document.getElementById("createEvent").value;
        localStorage.setItem(clickedid, a);
        document.getElementById(clickedid).insertAdjacentHTML('afterend', '<div><button onclick="eventshow(this.id)" class="showevent-' + clickedid + '" id="' + clickedid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-' + clickedid + '" id="' + clickedid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-' + clickedid + '" id="' + clickedid + '">Edit</button></div>');
        $('#myModal3').modal('hide');
        document.getElementById("createEvent").value = "";
        alert("Created!");
        }
}

function eventdelete(clickedid){
    if(localStorage.getItem(clickedid) == undefined || localStorage.getItem(clickedid) == null){
       alert("Add an Event First!!!");
    }
    else{
    localStorage.removeItem(clickedid);
    $(".showevent-"+clickedid).remove();
    $(".deleteevent-"+clickedid).remove();
    $(".editevent-"+clickedid).remove();
    document.getElementById("editEvent").value = "";
    alert("Event Deleted");
}
}

function eventshow(clickedid){
    document.getElementById("modalText").innerHTML = localStorage.getItem(clickedid);
    $('#myModal').modal('show');
}

function eventedit(clickedid){
    document.getElementById("editEvent").value = localStorage.getItem(clickedid);
    document.getElementById("saveButton").innerHTML = '<div><button onclick="eventsave(this.id)" class="btn btn-default editevent-'+clickedid+'" id="'+clickedid+'">Save</button></div><br>';
    $('#myModal2').modal('show');
}

function eventsave(clickedid){
    var a = document.getElementById("editEvent").value;
    localStorage.setItem(clickedid, a);
    document.getElementById("modalText").innerHTML = a;
    $('#myModal2').modal('hide');
    alert("Saved!");
}
