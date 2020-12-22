// Assign data from data.js to a descriptive variable
var tableData = data;

var tBody = d3.select("tbody");
// This function creates a table into the HTML with the data  passed as parameter
function buildTable(data){
    tBody.html("") // to clear the data
    data.forEach((rowData) => {
        var row = tBody.append("tr");
        Object.values(rowData).forEach((value) =>{
            var cellData = row.append("td");
            cellData.text(value);
        });
    });
}

buildTable(tableData);

// Select the buttom
var button = d3.select('#filter-btn');

button.on("click", function(){
    //Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime');
    //Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);
    // This line filters the data by the date input by user
    var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue);
    console.log(filteredData);
    buildTable(filteredData);
})
