
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var ball , ground1 , backGroung;
var dustbin;
var paper1 , paperImage

function preload()
{

	
}

function setup() {
	createCanvas(1600, 700);
	// background = color(255,255,255);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(width/2,670,width,20);

dustbin = new Wall(1200,650);

paper1 = new Paper(200,450,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  ground1.display();
  dustbin.display();
  paper1.display();
  
}
function keyPressed(){

if(keyCode === UP_ARROW){



Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

}

}


