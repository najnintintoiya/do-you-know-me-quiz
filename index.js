// import chalk from '/node_modules/chalk';
const chalk = require('chalk');
var readlinesync = require('readline-sync');
var userName = readlinesync.question("What is your name? ");
console.log(chalk.bold("Welcom " + userName + " let's see how well you know me..."));
console.log("-----------------------------");
var score = 0;

console.log("Leasson 1")
var arrQueOne = {
  question: "What is my name?\n",
  answer: "Najnin"
}
var arrQueTwo = {
  question: "What have I study?\n",
  answer: "BE"
}
var arrQueThree = {
  question: "Where do I live?\n",
  answer: "Gujarat"
}
var QueArray = [arrQueOne, arrQueTwo, arrQueThree];

for (i = 0; i < QueArray.length; i++) {
  var currentArray = QueArray[i];
  QnA(currentArray);
  function QnA(currentArray) {
    var userOutput = readlinesync.question(currentArray.question);
    if (userOutput === currentArray.answer) {
      console.log(chalk.green("You are right " + chalk.bold(userName)));
      score++;
      console.log("\n");
    }
    else {
      console.log(chalk.white.bgRed("You are wrong " + userName));
      console.log("\n");
    }
  }
}

var highScore = 3;

if (score == highScore) {
  console.log(chalk.bgGree.bold("You know me pretty well."));
}
else {
  console.log(chalk.bgRed.bold("You don't know me well.."));
}


