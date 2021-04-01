// UFO Level 1

// Get a reference to the table body
var tbody = d3.select("tbody")

// Show to data from the data.js
console.log(data);

// Loop through data and print each UFO sightings object
// data.forEach(function (ufodata) {
//     console.log(ufodata)
// });
function buildTable(tData) {
    tbody.html('')
    // Use D3 to append one table row 'tr' for each UFO sighting object
    tData.forEach(function (ufodata) {
        console.log(ufodata);
        var row = tbody.append("tr");

        Object.entries(ufodata).forEach(function ([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
// Call function to populate data
buildTable(data);

// UFO Level 2

// Get a reference to the button on the page with the id property set to 'filter-btn'

// Create variables for each filter button and call the function using D3 button
function filterButtonTapped() {
    var datetimeField = d3.select('#datetime').property('value');
    var cityField = d3.select('#city').property('value');
    var stateField = d3.select('#state').property('value');
    var countryField = d3.select('#country').property('value');
    var shapeField = d3.select('#shape').property('value');
    let filteredData = data;
    if (datetimeField) { filteredData = filteredData.filter(row => row.datetime === datetimeField); }
    if (cityField) { filteredData = filteredData.filter(row => row.city === cityField); }
    if (stateField) { filteredData = filteredData.filter(row => row.state === stateField); }
    if (countryField) { filteredData = filteredData.filter(row => row.country === countryField); }
    if (shapeField) { filteredData = filteredData.filter(row => row.shape === shapeField); }

    buildTable(filteredData);
}
var button = d3.select("#filter-btn");
button.on("click", filterButtonTapped);



