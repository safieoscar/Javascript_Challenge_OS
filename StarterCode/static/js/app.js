// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody');

//Loop through data in order to append table to html file
function displayData(data) {
    tbody.text("")
    data.forEach(function(ufo_sighting) {
    new_tr = tbody.append('tr')
    Object.entries(ufo_sighting).forEach(function([key,value]){
        new_td = new_tr.append('td').text(value)
    }
    )    
    })
}
displayData(tableData);

var filter = d3.select('#filter-btn');
var 


