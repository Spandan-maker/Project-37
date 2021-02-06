var contestantCount, database, quiz, question, Contestant, allContestants
var gameState = 0;

function setup(){
  var canvas = createCanvas(850,400);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  } 
  if(gameState === 1){
    quiz.play();
  }
  
}
