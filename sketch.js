var form,game,runner,canvas,database,gameState=0,playerCount,runner1,runner2,runner3,runner4;
var allrunners;
var allPlayers;
var distance = 0, obstacle, obstacleGroup,track,trackImg;

function preload(){
  trackImg=loadImage("track.jpg")
}

function setup() {
  
  
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  
  
}

function draw() {
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