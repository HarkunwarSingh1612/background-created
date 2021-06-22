class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder","Enter your name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.reset= createButton('reset');
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Hurdles Race");
      title.position(displayWidth/2-50, 0);
  
      this.input.position(displayWidth/2-50, displayHeight/2-50);
      this.button.position(displayWidth/2, displayHeight/2);
      this.reset.position(displayWidth-100, 30);
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        runner.name = this.input.value();
        playerCount+=1;
        runner.index = playerCount;
        runner.update();
        runner.updateCount(playerCount);
        this.greeting.html("Hello " + runner.name+" wait for other players to join...")
        this.greeting.position(displayWidth/2-50, displayHeight/4);
      });
     
      this.reset.mousePressed(()=>{
        game.update(0);
        runner.updateCount(0);
      });
    }
  }
  