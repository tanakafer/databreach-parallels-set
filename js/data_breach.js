// Asignamos las dimensiones a comparar
var chart = d3.parsets()
chart.dimensions([  "Method", "Sensitivity"]);


var vis = d3.select("#vis").append("svg")
    .attr("width", chart.width())
    .attr("height", chart.height());


// Cargamos los datos
d3.csv("data/data_breach.csv", function(error, csv) {
  vis.datum(csv).call(chart);
});
