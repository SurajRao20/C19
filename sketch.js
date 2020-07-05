var car, wall;
var speed, weight;


function setup() {
  createCanvas(1500,800);
  
  car = createSprite(400, 400, 40, 30);
  car.shapeColor = "orange";

  wall = createSprite(1400, 400, 25, 450);
  wall.shapeColor = "DarkTurquoise";

  speed = random(55,100);
  weight = random(700,1500);
}

function draw() {
  background("teal"); 
  
  car.velocityX = speed;

  if (wall.x - car.x < (car.width + wall.width)/2) {
      
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation > 180) {
       car.shapeColor = color(255,0,0);
    }

    if (deformation < 180 && deformation > 100 ) {
      car.shapeColor = color(230,230,0);
    }

    if (deformation < 100) {
      car.shapeColor = color(00,255,0);
    }

    
  }

  drawSprites();
}