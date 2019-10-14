// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.number1),
      num2 = Number(req.body.number2),
      result = num1 + num2;

  res.send("Your answer is = " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight),
      height = parseFloat(req.body.height),
      bmi = Math.floor(weight / (height * height));
  res.send("Your BMI is " + bmi);
});

app.listen("3000", function() {
  console.log("The server has been started");
});
