class Game{
    constructor(){

    }
    getState(){
        var State=database.ref('gameState');
        State.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
   async start(){
        if(gameState===0){
            runner = new Runner();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        runner.getCount();
      }
      form = new Form()
      form.display();
    }
    runner1=createSprite(100, 200);
    //car1.addImage("car1",car1Img);
    runner2=createSprite(300, 200);
    //car2.addImage("car2",car2Img);
    runner3=createSprite(500, 200);
    //car3.addImage("car3",car3Img);
    runner4=createSprite(700, 200);
    //car4.addImage("car4",car4Img);
    allrunners=[runner1, runner2, runner3, runner4]
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100)
        Runner.getPlayerInfo();
        runner.getCarsAtEnd();
        if(allPlayers !== undefined){
          background("brown");
          var display_position = 130;
         //image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
        var index=0;
        var x=175;
        var y;
          for(var plr in allPlayers){
            index=index+1;
            x=x+200;
            y=height-allPlayers[plr].distance;
            allrunners[index-1].x=x;
            allrunners[index-1].y=y;
            if(index===runner.index){
              stroke(10);
              fill("red");
              ellipse(x,y,70, 70);
              allrunners[index-1].shapeColor="red";
              camera.position.x=displayWidth/2;
              camera.position.y=allrunners[index-1].y;
        
          }
        }
      }
        if(keyIsDown(UP_ARROW) && runner.index !== null){
          runner.distance +=10
          runner.update();
        }
        if(runner.distance >3700){
          gameState=2;
          runner.rank +=1;
          Runner.updateCarsAtEnd(runner.rank);
    
        }
        drawSprites();
      }
    
    
}