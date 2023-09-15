/* 

Script for extracting the timetable data from https://ntnu.1024.no/USER

*/

const timetable = document.getElementById("schedule");
const tt_tbody = timetable.getElementsByTagName("tbody")[0];
const tt_rows = tt_tbody.getElementsByTagName("tr");

let schedule = {

}

for (let row in tt_rows) {
    const cols = row.getElementsByTagName("td");
    const time = cols[0].children[0].innerHTML;
    console.log(time)
}