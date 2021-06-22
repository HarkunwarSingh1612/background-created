var form,game,runner,canvas,database,gameState=0,playerCount,runner1,runner2,runner3,runner4, runner1Img, runner1Img2;
var allrunners;
var allPlayers;
var distance = 0, obstacle, obstacleGroup,track,trackImg, runSpeed=10, obstaclesImg, backgroundImg;


function preload(){
  trackImg=loadImage("track.jpg")
  obstaclesImg=loadImage("hurdles.png")
  runner1Img=loadAnimation("running2.jpg", "running3.jpg", "running4.jpg", "running5.jpg", "running6.jpg", "running7.jpg", "running8.jpg", "running9.jpg")
  runner1Img2=loadAnimation("running2.jpg");
  backgroundImg=loadImage("background.png");
}

function setup() {
  
  
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw() {
  background(backgroundImg);
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2){
        game.end();
      }

 
}
