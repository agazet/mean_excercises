const express = require('express');
let app = express();
const PORT = 3000;

let ejsEngine = require("ejs-locals");
app.use(express.static(__dirname + '/public'));
app.engine("ejs", ejsEngine);           // support master pages
app.set("view engine", "ejs");          // ejs view engine

app.get("/",(req, res) => {
    res.render("ejs/index", {title: "View JSON feeds"});
});

getJsonContentAsPageWithTable("countries","./geo_data/ten_most_populated_countries.json", "Most Populated Countries");

getJsonContentAsPageWithTable("capitals","./geo_data/canada_capitals.json", "Canada Province Capitals");

getJsonContent("/api/countriesJSON", "./geo_data/ten_most_populated_countries.json");

getJsonContent("/api/capitalsJSON", "./geo_data/canada_capitals.json");

app.listen(PORT, function(err, res) {
    if (err) {
        console.log("Server Error!")
    } else {
        console.log("Server started and listening on port " + PORT);
    }
});

function readJsonFile(filename){
    const fs = require('fs');
    return fs.readFileSync(filename);
}

function getJsonContent(path, filepath){
    app.get(path, (req, res)=>{
        res.set("content-Type", "application/json");
        res.send(readJsonFile(filepath));
    });
}

function getJsonContentAsPageWithTable(apiName, filepath, title){
    app.get("/api/" + apiName, (req, res) => {
        let list = JSON.parse(readJsonFile(filepath));
        res.render("ejs/"+apiName, {title: title, list: list});
    });
}