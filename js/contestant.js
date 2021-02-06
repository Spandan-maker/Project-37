class contestant {
  
    constructor(){
      this.index = null;
      this.name = null;
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      
      contestantCountRef.on("value", (data)=>{
        contestantCount = data.val();
        
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
      
      })
    }
  
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value", (data)=>{
        allContestants = data.val();
      })
    }
    
    display(){
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();

            Contestant.name = this.input1.value();
            contestantCount+=1;
            Contestant.index = contestantCount;

            Contestant.update();
            Contestant.updateCount(contestantCount)
        }
    )}
}