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

app.get("/api/countries",(req, res) => {
    let list = JSON.parse(readJsonFile("./geo_data/ten_most_populated_countries.json"));
    res.render("ejs/countries", {title: "Most Populated Countries", list: list});
});

app.get("/api/capitals",(req, res) => {
    let list = JSON.parse(readJsonFile("./geo_data/canada_capitals.json"));
    res.render("ejs/capitals", {title: "Canada Province Capitals", list: list});
});

app.get("/api/countriesJSON", (req, res)=>{
    res.set("content-Type", "application/json");
    res.send(readJsonFile("./geo_data/ten_most_populated_countries.json"));
});

app.get("/api/capitalsJSON", (req, res)=>{
    res.set("content-Type", "application/json");
    res.send(readJsonFile("./geo_data/canada_capitals.json"));
});

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