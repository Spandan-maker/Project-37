class contestant {
  
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
  
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
        answer: this.answer
      
      })
    }
    
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestants');

      contestantInfoRef.on("value", (data)=>{
        allContestants = data.val();
      })
    }
}
