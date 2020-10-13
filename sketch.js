
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
	ball = new Ball(300,500);
	ball2 = new Ball(340,500);
	ball3 = new Ball(380,500);
	ball4 = new Ball(420,500);
	ball5 = new Ball(460,500);
	rope1 = new Chain(ball.body,roof.body,-80,0);
	rope2 = new Chain(ball2.body,roof.body,-40,0);
	rope3 = new Chain(ball3.body,roof.body,0,0);
	rope4 = new Chain(ball4.body,roof.body,40,0);
	rope5 = new Chain(ball5.body,roof.body,80,0);
	

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
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-2,y:-2})
	}
}


