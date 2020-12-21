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

//create a new function inputFiltered
// the objecte we create new object filtered
// grap the value from all inouts
var  filteredObject = {}

funtion inputFilter (){
var listItem = d3.select(this).select("input");
var listValue =  listItem.property("value");
  var id = listItem.attr("id"); // grab the id for everyelement

  listItem.text("This text is overrided");
if (listValue){
    filteredObject[id] = listValue;
}else{
    delete filteredObject[id]; // delete just blank filters
}
}

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

    // var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue);
    // console.log(filteredData);
    // buildTable(filteredData);

    Object.entries(filteredObject).forEach(([key.value])=>{
        filteredData = tableData.filter(row => row[key]=== value);
    })

})
