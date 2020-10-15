
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof();
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	ball = new Ball(startBobPositionX-bobDiameter*2,startBobPositionY,500);
	ball2 = new Ball(startBobPositionX-bobDiameter,startBobPositionY,500);
	ball3 = new Ball(startBobPositionX,startBobPositionY,500);
	ball4 = new Ball(startBobPositionX+bobDiameter,startBobPositionY,500);
	ball5 = new Ball(startBobPositionX+bobDiameter*2,startBobPositionY,500);
	rope1 = new Chain(ball.body,roof.body,-bobDiameter*2,0);
	rope2 = new Chain(ball2.body,roof.body,-bobDiameter,0);
	rope3 = new Chain(ball3.body,roof.body,0,0);
	rope4 = new Chain(ball4.body,roof.body,bobDiameter,0);
	rope5 = new Chain(ball5.body,roof.body,bobDiameter*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-50,y:-45})
	}
}


