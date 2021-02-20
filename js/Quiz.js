class Quiz{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
    }
    
 async start(){
        if(gameState === 0){
          Contestant = new contestant();
          
          var contestantCountRef = await database.ref('contestantCount').once("value");

          if(contestantCountRef.exists()){
              contestantCount = contestantCountRef.val();
              Contestant.getCount();
          }

          question = new Question();
          question.display();

        }
    }

    play(){
        
        textSize(30);
        text("Results", 120, 50)

        contestant.getPlayerInfo();  
        var display_Position = 300;
    
        if(allContestants !== undefined){

          for(var plr in allContestants){

            var correctAns = "2";

            if (correctAns === allContestants[plr].answer){
              fill("green");

              display_Position += 20;

              textSize(15);
              text(allContestants[plr].name + ": " + allContestants[plr].answer, 120, display_Position);
            
            } else{
              fill("red");

            }
        }
      }
    }
}
