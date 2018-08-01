var surveyData = require("../data/friends");
var data;
var convertedArray = [];
var scoreArr;
var absoluteDiff;
var doneScore;
var doneScoreArr = [];
var surveyScore;
var lowestScore = 500;
var bestMatch;
var differenceArray = [];

var reducer = (accumulator, currentValue) => accumulator + currentValue;


module.exports = function (app) {

    //GET ROUTE W/ URL/API/FRIENDS
    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
    })





    //POST REQUESTS

    app.post("/api/friends", function (req, res) {

        data = req.body;
        console.log(data);

        numberConvert();

        //loops through all surveys

        for (var i = 0; i < surveyData.length; i++) {
            friendScore = surveyData[i].scores
            findMatch();
            differenceArray = [];
        }
        showMatch();

        res.json(bestMatch);
        console.log(bestMatch);
    })
}
//function converts string to numbers
function numberConvert() {
    scoreArr = data.scores;

    for (var i = 0; i < scoreArr.length; i++) {
        surveyScore = Number(scoreArr[i]);
        convertedArray.push(surveyScore);
    }
    console.log(convertedArray);


}

//function to find match
function findMatch() {
    for (i = 0; i < convertedArray.length; i++) {
        var difference = convertedArray[i] - friendScore[i]
       // console.log("difference" + difference);
        absoluteDiff = Math.abs(difference);
        differenceArray.push(absoluteDiff);
        doneScore = differenceArray.reduce(reducer);
    };
    doneScoreArr.push(doneScore);
    console.log("doneScoreArray" + doneScoreArr);
};

//function to show match
function showMatch() {
    for (var i = 0; i < doneScoreArr.length; i++) {
        if (doneScoreArr[i] < lowestScore) {
            lowestScore = doneScoreArr[i];
        }
    }

    console.log("Lowest Score " + lowestScore);

    for (var i = 0; i < doneScoreArr.length; i++) {
        if (lowestScore === doneScoreArr[i]) {
           // console.log(surveyData[i])
            bestMatch = surveyData[i];
        }
    }
};




