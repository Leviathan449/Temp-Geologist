
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

var hammer;
var rubber, stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Hammer = new mallet(600,200,40,60);

	Stone = new rock(400,460, 30,30);

	//Rubber = new bounce(200,145,20,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  stone.display();
  rubber.display();
  
  drawSprites();
 
}



