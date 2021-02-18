var bottomOfBox;
var leftOfBox,rightOfBox;
var paper
var paperObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paperObject = createSprite(200,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bottomOfBox = createSprite(600,660,200,20);
  leftOfBox = createSprite(500,620,20,100);
  rightOfBox = createSprite(700,620,20,100);

  paperObject.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85,y : -85 })
  }

}


