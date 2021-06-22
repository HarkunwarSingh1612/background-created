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
    runner1.addAnimation("running",runner1Img);
    runner2=createSprite(300, 200);
    runner2.addAnimation("standing",runner1Img2);
    runner2.addAnimation("running",runner1Img);
    runner3=createSprite(500, 200);
    runner3.addAnimation("standing",runner1Img2);
    runner3.addAnimation("running",runner1Img);
    runner4=createSprite(700, 200);
    runner4.addAnimation("standing",runner1Img2);
    runner4.addAnimation("running",runner1Img);
    allrunners=[runner1, runner2, runner3, runner4]
      
  obstacleGroup=new Group();
    this.Obstacles();
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
              if(keyIsDown(UP_ARROW) && runner.index !== null){
                //runner.distance +=10
                this.MovingSpeed();
                runner.update();
                allrunners[index-1].changeAnimation("running",runner1Img);
                
              }
              
              else{
                //runner.distance +=10
                //runner1.changeAnimation("standing",runner1Img2);
                allrunners[index-1].changeAnimation("standing",runner1Img2);
              }
              if(keyIsDown("space")&& runner.index !== null){
                
              }
          }
        }
      }
       
        if(runner.distance >3700){
          gameState=2;
          runner.rank +=1;
          Runner.updateCarsAtEnd(runner.rank);
    
        }
        drawSprites();
      }
       Obstacles(){
        for(var j=0;j<10;j++){
           for(var i=400;i<=1000;i+=200){
             for(var k=300; k<=3500;k+=500 ){
            var obstacle=createSprite(i, height-k, 20, 20);
           
            obstacle.addImage(obstaclesImg);
            obstacle.scale=0.2;
            obstacleGroup.add(obstacle);
           }
          }
          }
      }
      MovingSpeed(){
        runner.distance+=runSpeed;
       // runner1.changeAnimation("running",runner1Img);
      }
    
}
