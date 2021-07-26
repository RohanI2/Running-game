
function preload(){
  //pre-load images
  boy_running=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImage);
  path.scale=1.2;
  path.velocityY=4;
  boy=createSprite(200,350,10,30);
  boy.addAnimation("running",boy_running);
  boy.scale=0.06
  leftBoundary=createSprite(100,200,5,400);
  rightBoundary=createSprite(300,200,5,400);
  leftBoundary.visible=false
  rightBoundary.visible=false

}

function draw() {
  background(0);
  drawSprites();
if(path.y>400){
  path.y=height/2;
}
boy.collide(leftBoundary)
boy.collide(rightBoundary)
boy.x=World.mouseX
if (boy.x<90){
  boy.x=120
}
if (boy.x>290){
  boy.x=280
}
}
