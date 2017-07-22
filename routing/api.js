const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = require('../server.js');

var router = express.Router();
//bodyParser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));

//sample data
var arrObj = [{
  name: "Ahmed",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5
    ]
},
{
  name: "Ahmed",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5
    ]
},
{
  name: "test",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      1,
      1,
      4,
      3,
      2
    ]
}];

//routes
router.get("/api/friends", function(req, res) {
  res.json(arrObj);
});

//Post
router.post("/api/friends", function(req, res) {
  var newEntry = req.body;
  console.log(newEntry);
  arrObj.push(newEntry);
  var sender = findComp(arrObj);
  res.send(sender);
});


var findComp = function(arrObj){
  var length = arrObj.length;
  var compindex = 0;
  var lowestscore = 10000;
  for(var i = 0; i < arrObj.length -1; i++){
    var compatibitiy = differenceArray(arrObj[i].scores, arrObj[length-1].scores);
    if(compatibitiy < lowestscore){
      lowestscore = compatibitiy; 
      compindex = arrObj[i];
    }
  }
  console.log(compindex);
  return compindex;
};


//function to difference arrays
var differenceArray = function(arr1, arr2){
	var totalScore = 0;
	var difArr = [];
	for(var i = 0; i < arr1.length; i++){
    arr1[i] = parseInt(arr1[i]);
    arr2[i] = parseInt(arr2[i]);
		var dis = arr1[i] - arr2[i];
		if(dis < 0){
			dis = (dis * (-1));
		};
		difArr.push(dis);
	};
console.log("difaR" + difArr);
	for(var n = 0; n < difArr.length; n++){
		totalScore += difArr[n];
	}
  console.log(totalScore);
	return totalScore;
}



module.exports = router;