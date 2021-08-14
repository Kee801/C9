var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box2 = createSprite(300, 200, 30, 30);
}

function draw() 
{
   background(30);

  box2.x = World.mouseX;
  box2.y = World.mouseY;

  drawSprites();
}




