/* 

Script for extracting the timetable data from https://ntnu.1024.no/USER

*/

function extract_data() {
    const timetable = document.getElementById("lectures");
    const tt_tbody = timetable.getElementsByTagName("tbody")[0];
    const tt_rows = tt_tbody.getElementsByTagName("tr");
    
    const data = {
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "undefined": []
    }

    for (let row of tt_rows) {
        const row_data_fields = row.getElementsByTagName("td");
        let day, subject, time, room, type;
        try {
            day = row_data_fields[1].innerHTML;
        } catch {}
        try {
            subject = row_data_fields[0].innerHTML;
        } catch {}
        try {
            time = row_data_fields[2].innerHTML;
        } catch {}
        try {
            room = row_data_fields[3].children[0].innerHTML;
        } catch {}
        try {
            type = row_data_fields[4].innerHTML;
        } catch {}
        const row_data_obj = {subject, time, room, type}
        data[day].push(row_data_obj)
    }
    console.log(data)
}

extract_data()
