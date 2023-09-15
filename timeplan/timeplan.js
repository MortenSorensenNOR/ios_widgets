/* 

Script for extracting the timetable data from https://ntnu.1024.no/USER

*/

(function() {
    const timetable = document.getElementById("schedule");
    const tt_tbody = timetable.getElementsByTagName("tbody")[0];
    const tt_rows = tt_tbody.getElementsByTagName("tr");
    
    let schedule = {
    
    }
    let test = [];
    
    for (let i = 0; i < tt_rows.length; i++) {
        const cols = tt_rows[i].getElementsByTagName("td");
        const time = cols[0].children[0].innerHTML.split("&nbsp;-&nbsp;").join("-").split(" ").join("");
        test.push(time);
    }
    return test;
})
