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
    runner1.addAnimation("standing",runner1Img2);
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
         image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
        var index=0;
        var x=175;
        this.Obstacles();
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
              if(allrunners[index-1].isTouching(obstacleGroup)){
                runSpeed=5;
               
              }
              
          }
        }
      }
        if(keyIsDown(UP_ARROW) && runner.index !== null){
          //runner.distance +=10
          this.MovingSpeed();
          runner.update();
          
        }
        
        else{
          //runner.distance +=10
          runner1.changeAnimation("standing",runner1Img2);
        }
        if(runner.distance >3700){
          gameState=2;
          runner.rank +=1;
          Runner.updateCarsAtEnd(runner.rank);
    
        }
        drawSprites();
      }
       Obstacles(){
         if(frameCount%250===0){
           for(var i=400;i<=1000;i+=200){
            var obstacle=createSprite(i, height-runner.distance-350, 20, 20);
            obstacle.velocityY=2;
            obstacle.addImage(obstaclesImg);
            obstacle.scale=0.2;
            obstacleGroup.add(obstacle);
           }
         
        }
      }
      MovingSpeed(){
        runner.distance+=runSpeed;
        runner1.changeAnimation("running",runner1Img);
      }
    
}
/*function keyReleased(){
  if(keyCode === 72){
    runner1.changeAnimation("standing",runner1Img2);
  }
}

function keyPressed(){
  if(keyCode === 72){
    runner1.changeAnimation("running",runner1Img);
  }
}*/