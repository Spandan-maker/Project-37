class Question {

    constructor() {
        this.input = createInput("Name");
        this.input2 = createInput('Answer');
        this.button1 = createButton('Submit');
        
        this.title = createElement('h2')
        this.question = createElement("h3");

        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");

    }

    hide(){
        this.button1.hide();
        this.input.hide();
        this.input2.hide();
      }


    display(){
        this.title.html("QUIZ");
        this.title.position(350,0);
            
        this.question.html("Q:- What is the unit of force denoted by?");
        this.question.position(100,80);
          
        this.option1.html("1: M (Mass)");
        this.option1.position(150,120);
          
        this.option2.html("2: N (Newton)");
        this.option2.position(150,140);

        this.option3.html("3: F (Force)");
        this.option3.position(150,160);

        this.option4.html("4: None of the above");
        this.option4.position(150,180);
          
        this.input.position(150, 250);
        this.input2.position(450,250);

        this.button1.position(150,320);


        this.button1.mousePressed(()=>{
            this.title.hide();
            this.input.hide();
            this.input2.hide();

            this.button1.hide();

            Contestant.name = this.input.value();
            contestantCount+=1;
            Contestant.index = contestantCount;

            Contestant.update();
            Contestant.updateCount(contestantCount);
        }
    )}
                
}