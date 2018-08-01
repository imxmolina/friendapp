var path = require("path");


module.exports = function(app){

//html routes /survey

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//html routes to / homepage on default
app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


};

