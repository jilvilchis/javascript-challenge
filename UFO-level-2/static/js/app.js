// Assign data from data.js to a descriptive variable
var tableData = data;
var tBody = d3.select("tbody");

// This function Displays all the data from data.js at the begining of the script
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

// To create object with filtered selections from user input
var  filteredObject = {}
// To create an array that will hold the filtered Data
var  filteredData = []

//Select the button element
var button = d3.select('#filter-btn');
// Event listener on click
button.on("click", function(){
    // Select the input elements from the differents input selections
    // after the element is selected we Get the value property of the input element
    var inputDate = d3.select("#datetime");
    inputDate.property("value") ? filteredObject["datetime"] = inputDate.property("value") : delete filteredObject["datetime"];

    var inputCity = d3.select("#city");
    inputCity.property("value") ? filteredObject["city"] = inputCity.property("value") : delete filteredObject["city"]; 
    
    var inputState = d3.select("#state");
    inputState.property("value") ? filteredObject["state"] = inputState.property("value") : delete filteredObject["state"];

    var inputCountry = d3.select("#country");
    inputCountry.property("value") ? filteredObject["country"] = inputCountry.property("value") : delete filteredObject["country"];

    var inputShape = d3.select("#shape");
    inputShape.property("value") ? filteredObject["shape"] =  inputShape.property("value") : delete filteredObject["shape"];
    // Console.log to inspect the filteredObject
    console.log(filteredObject);
     
    // This code filters the data using the filteredObject with user selections
    Object.entries(filteredObject).forEach(([key, value])=>{
        filteredData = tableData.filter(row => row[key] === value);
    })
    // Console.log to inspect the filteredData 
    console.log(filteredData);
    // We call the BuildTable function with filteredData
    buildTable(filteredData);
})

// ***THIS CODE IS JUST FOR FUTURE REFERENCES. IT IS A FAILED ATTEMPT, BUT SOME PARTS CAN BE REUSE IN THE FUTURE
// function inputFilter(){
    // var listItem = d3.selectAll("input");
    // var listItem = d3.select(this).select("input");      //selectAll(".form-control");   
    // var listValue =  listItem.property("value");
    // var id = listItem.attr("id"); // grab the id for everyelement
    // if (listValue){
    //     filteredObject[id] = listValue;
    // }else{
    //     delete filteredObject[id]; // delete just blank filters
    // }
// }

