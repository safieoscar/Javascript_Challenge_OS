// from data.js
var tableData = data;

// YOUR CODE HERE

//Use D3 to append data to table
d3.select('tbody').selectAll('tr').data(data).enter().append('tr').html(function(data){
    return `<td> ${data.datetime}</td> <td> ${data.city}</td> <td> ${data.state}</td> <td> ${data.country}</td> <td> ${data.shape}</td> <td> ${data.durationMinutes}</td> <td> ${data.comments}</td>`;
});

console.log(tableData)

//create variables for html elements
var inputField = d3.select("#datetime");
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");
var ufoTable = d3.select("#ufo-table");
var tbody = ufoTable.select("tbody");


//create function for table filter 
function tableFilter(){
    d3.event.preventDefault();
    tbody.selectAll("tr").remove();
    var inputDate = inputField.property("value");
    var filteredTable = tableData.filter(ufo => ufo.datetime === inputDate);
    console.log(filteredTable);
    filteredTable.forEach((ufo) => {
        var tableRow = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = tableRow.append("td");
            cell.text(value);
            console.log(filteredTable)

        });
    });
}

function resetTable() {
    d3.select('tbody').selectAll('tr').data(data).enter().append('tr').html(function(data){
   return `<td> ${data.datetime}</td> <td> ${data.city}</td> <td> ${data.state}</td> <td> ${data.country}</td> <td> ${data.shape}</td> <td> ${data.durationMinutes}</td> <td> ${data.comments}</td>`;
});
};

filterButton.on("click", tableFilter);
resetButton.on("click", resetTable);

