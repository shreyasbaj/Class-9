
function setup() {
  createCanvas(500,500);
  var ball= createSprite(250,250,10,10);
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
ball.y= ball.y-5
  }
drawSprites();
}




