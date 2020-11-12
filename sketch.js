var ground;
var obstacle;
var player, playerImg, playerRunning, plyrRunLeft; 
var playerDead, playerJump;
var backgroundImg;
var wall, wall1, wall2, wall3;
var PLAY=1;
var END =0;
var gameState = PLAY;
var score = 0;
var life = 5;
var invisibleBlock, invisibleBlockGroup;

function preload(){
 backgroundImg = loadImage("image/bg.jpg");
 playerImg = loadImage("player/idle.png");
 playerRunning = loadAnimation("player/Run000.png", "player/Run001.png", "player/Run002.png", "player/Run003.png", "player/Run004.png", "player/Run005.png", "player/Run006.png", "player/Run007.png", "player/Run008.png", "player/Run009.png");
 plyrRunLeft = loadAnimation("playerr/Run000.png", "playerr/Run001.png", "playerr/Run002.png", "playerr/Run004.png", "playerr/Run005.png", "playerr/Run007.png", "playerr/Run008.png", "playerr/Run009.png");
}

function setup(){
  createCanvas(1365, 653);

  // background1 = createSprite(690, 325);
  // background1.addImage("background1", backgroundImg);
  // background1.scale = 2.8;

  wall = createSprite(1355,326, 20, 1365);
  wall.shapeColor="white";

  wall1 = createSprite(10, 326, 20, 1365);
  wall1.shapeColor="white";

  wall2 = createSprite(655,643, 1365, 20);
  wall2.shapeColor="white";

  wall3 = createSprite(665, 10, 1365, 20);
  wall3.shapeColor="white"; 

  player = createSprite(300, 500, 20, 70);
  player.addImage("player", playerImg);
  player.scale = 0.2;
  
  obstacleGroup = new Group();
  invisibleBlockGroup = new Group();
}

function draw(){
  background(backgroundImg);

  fill("black");
  textSize(35);
  text.depth = 10;
  text("Life : " + life, 80, 70);

 
   if(gameState === PLAY){
    if(keyDown("RIGHT_ARROW")) {
      player.addAnimation("player", playerRunning);
      player.x = player.x + 6;
  }
  
  if(keyDown("LEFT_ARROW")) {
    player.addAnimation("player", plyrRunLeft);
    player.x = player.x - 6;
  }
  
  if(keyDown("UP_ARROW")){
    player.addAnimation("player", playerRunning);
      player.velocityY = -6;
  }
  
  if(keyDown("DOWN_ARROW")){
    player.addAnimation("player", playerRunning);
      player.velocityY = 6;
  }

  if(player.isTouching(wall) || player.isTouching(wall1) 
  || player.isTouching(wall2) || player.isTouching(wall3)
  ){

    player.destroy();
    gameState = END;
  }

  createObstacle();
  drawSprites();
   }

  if(gameState === END){
      background("lightblue");
      noStroke();
      textSize(40);
      fill("Black");
      text("GAME OVER!!", 400, 400);
  }

  if(invisibleBlockGroup.isTouching(player)){
    life = life-1;
  }
}

function createObstacle(){
  if(frameCount%60===0){
    obstacle  = createSprite(300, -10, 500, 20);
    obstacle.velocityY = 3;
    obstacle.shapeColor=color(244, 226, 101);
    obstacle.x = Math.round(random(100, 1200));
    obstacle.lifetime= 225;

    invisibleBlock = createSprite(300, 5);
    invisibleBlock.width = obstacle.width;
    invisibleBlock.height = 2;
    invisibleBlock.x = obstacle.x;
    invisibleBlock.velocityY = 3;
    invisibleBlock.lifetime = 225;
    invisibleBlock.debug = true;
    invisibleBlockGroup.add(invisibleBlock);
    
    obstacleGroup.add(obstacle);
  }
}

// function fruits() {
//   if(World.frameCount%80===0) {
//     rand =  Math.round(random(1,4));
//     if(rand===1) {
//       fruit.addImage(fruit1);
//     }
//     else if(rand===2) {
//       fruit.addImage(fruit2);
//     }
//     else if(rand===3) {
//       fruit.addImage(fruit3);
//     }
//     else if(rand===4) {
//       fruit.addImage(fruit4);
//     }
//     fruit.y = Math.round(random(50,340));
  
//     position =  Math.round(random(1,2));

    
//     if(position==1)
//     {
//       fruit.x = 600;
//       fruit.velocityX = -(7+(score/4));
//     }
//     else
//     {
//       if(position==2) {
//         fruit.x = 0;
//     fruit.velocityX = (7+(score/4));
      
    
//     fruit.setLifetime = 100;
//       }
//     }
//     fruitGroup.add(fruit);
    
// }
// }