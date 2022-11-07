var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Shoaib",
    score: 5,
  },

  {
    name: "Ansari",
    score: 4,
  },
]

var questions = [{
  question: "React is library of which language? ",
  answer: "Javascript"
}, {
  question: "Springboot is framework of which language? ",
  answer: "Java"
},
{
  question: "What does HTML stand for? ",
  answer: "Hyper Text Markup Language"
},
{
  question: "What does CSS stand for? ",
  answer: "Cascading Style Sheets"
},
{
  question: "In which year javascript is first appeared? ",
  answer: "1995"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "  DO YOU KNOW Shoaib?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("You are Right!");
    score = score + 1;
    
  } else {
    console.log("You are Wrong!");
   
  }

  console.log("current score: ", score);
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You Scored: ", score);

  console.log("Check out the high scores");

  for(i=0;i<highScores.length;i++)
    {
      console.log(highScores[i].name," : ",highScores[i].score);
    }
}


welcome();
game();
showScores();
