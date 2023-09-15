/* 

Script for extracting the timetable data from https://ntnu.1024.no/USER

*/

(function() {
    const timetable = document.getElementById("schedule");
    const tt_tbody = timetable.getElementsByTagName("tbody")[0];
    const tt_rows = tt_tbody.getElementsByTagName("tr");
    
    let schedule = {
    
    }
    let test = []
    
    for (let row in tt_rows) {
        const cols = row.getElementsByTagName("td");
        const time = cols[0].children[0].innerHTML;
        test.push(time)
    }
    return test
})
