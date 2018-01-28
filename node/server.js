const http = require('http');
const fs = require('fs');

let calculation = require("./calc");


let port = 3000;

let server = http.createServer(function(request, response){
    console.log(request.url);
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    console.log(request.url);
    let values = request.url.split("/");
    console.log(values);
    let calc = calculation.calculate(values[1], values[2]);
    response.write("<h3>"+calc+"<h3>");
    response.end();
});

server.listen(port, () => {
    console.log("Server started on port " + port);
});