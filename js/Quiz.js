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
        title.hide();
        question.hide();

        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();


        textSize(30);
        text("Results", 120, 100)

        Contestant.getPlayerInfo();
    
        if(allContestants !== undefined){

          for(var plr in allContestants){

            var correctAns = "2";
            if (correctAns === allContestants[plr].answer)
              fill("green")
            else
              fill("red");
    
            
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 120, 300)
          }
        }
      }

}