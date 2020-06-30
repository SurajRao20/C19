var monkey, forest, banana, invisibleGround, invisibleGround, stone, gameOver, restart;
var monkey_running, ground_img, ground1_img, forest_img, banana_img, stone_img, gameOver_img, restart_img;
var score, count;
var obstacleGroup, bananaGroup;



function preload(){
 monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png") ;
  

  jungle_img = loadImage("jungle.jpg");
  banana_img = loadImage("Banana.png");
  stone_img =  loadImage("stone.png");
  gameOver_img =loadImage("gameOver.png");
  restart_img =loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  jungle = createSprite(100,60,20,20);
  jungle.addAnimation("bgk", jungle_img);
  jungle.scale=1.2  ;
  jungle.velocityX = -3;
  
  monkey = createSprite(100,250,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1 ;
  monkey.depth = monkey.depth + 4;
  
  gameOver = createSprite(270,100,20,20);
  gameOver.addAnimation("gameOver", gameOver_img);
  gameOver.visible = false;
  
  
  score = 0;
  count = 0;
  
  invisibleGround = createSprite(300,290,600,10);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(50,280,600,10);
  invisibleGround2.visible = false;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
}

function draw() {
  background(220);
  
 if (jungle.x < 0){
    jungle.x = 300;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  if (bananaGroup.isTouching(monkey)) {
    count = count +5;
  }
  
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale=0.040
  }    
  
  switch(count){  
        
        case 105:monkey.scale =0.15;
        break;
        
        case 160:monkey.scale =0.25;
        break;
        
        case 245:monkey.scale =0.35;
        break;
        
        case 345:monkey.scale =0.45;
        break;
        
        case 445:monkey.scale =0.55;
        break;
        
        case 545:monkey.scale =0.65;
        break;
        
        case 1045:monkey.scale =2;
        break;
        
        default: break;
  }
    
    
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround2);
  
  spawnBananas();
  spawnStones(); 
  drawSprites();
  fill("white");
  textSize(18);
  score = score+Math.round(getFrameRate()/4);
  text("Distance: "+ score, 5, 15);
  text("Score: "+ count, 5, 30);
}

function spawnStones() {
  if (frameCount % 140 === 0) {
    var stone = createSprite(600,280,40,10);
    stone.addImage(stone_img);
    stone.scale = 0.14;
    stone.velocityX = -6;
    stone.lifetime = 200;
    stone.collide(invisibleGround);
    obstacleGroup.add(stone);
  }
}

function spawnBananas() {
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,280,40,10);
    banana.addImage(banana_img);
    banana.scale = 0.058;
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.collide(invisibleGround);
    bananaGroup.add(banana);
  }
}


 
  