var bullet;
var wall;
var thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(22,55);
  thickness = random(22,83);
  weight = random(30,52);

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "purple";


}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall)){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness)

      if(damage > 10){
          wall.shapeColor = "red";
      }
      if(damage < 10){
          wall.shapeColor = "green";
      }
  }
  

  drawSprites();
}

function hasCollided(Lbullet,Lwall){
     bulletRightEdge = Lbullet.x + Lbullet.width;
     wallLeftEdge = Lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
        return true;
    }
    
        return false;
    
}