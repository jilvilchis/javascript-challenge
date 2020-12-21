// Assign data from data.js to a descriptive variable
var tableData = data;
var tBody = d3.select("tbody");


// Select the buttom
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

var button = d3.select('#filter-btn');

button.on("click", function(){
    //Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime');
    //Get the value property of the input element
    var inputValue = inputElement.property("value");
    // inputValue = Date(inputValue);
    // console.log("hello")
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue);
    console.log(filteredData);
    buildTable(filteredData);

})

// const output_Date = document.querySelector('')


// const myForm = document.querySelector('filter-btn')
// myForm




