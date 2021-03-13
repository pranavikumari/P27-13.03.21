
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject, groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject=new Bob(390,400,700);
	groundObject=new Ground(width/2,670,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject.display();
  groundObject.display();
  
  drawSprites();
 
}



