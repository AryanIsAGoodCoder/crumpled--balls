
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground;
var string;
var ground1;
var ground2;
var ground3;
var ground4;

var piece1,piece2,piece3;

var chain1,chain2,chain3,chain4,chain5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

 
  //ground = new Ground(300,100);
  //ground1 = new Ground1(300,200,10,50);
  //ground2 = new Ground1(212,200,10,50)
 //ground3 = new Ground1(256,200,10,50);
  //ground4 = new Ground1(344,200,10,50);
  bobObject1 = new Ball(460,300,50);
  bobObject2 = new Ball(220,300,50);
   ground = new Ground (300,100);
   bobObject3 = new Ball(300,300,50);
   bobObject4 = new Ball(140,300,50);
   bobObject5 = new Ball(380,300,50);
 
 
   piece1 = new Ground1(460,100);
   piece2 = new Ground1(220,100);
   piece3 = new Ground1(140,100);
   piece4 = new Ground1(380,100);

  
 
Engine.run(engine);


	
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  chain1 = new Rope(ground.body,bobObject3.body);
  chain2 = new Rope(piece1.body,bobObject1.body);
  
 chain3 = new Rope(piece2.body,bobObject2.body);
   chain4 = new Rope(piece3.body,bobObject4.body);
   chain5 = new Rope(piece4.body,bobObject5.body);
  
  
  bobObject1.display();
  bobObject2.display();
  bobObject4.display();
  bobObject3.display();
  //ground1
 // ground2.display();
  //ground3.display();
   //ground4.display();
 
 //ground1.display();
 



 //console.log(body);
  
  
  chain1.display();
  chain1.display();
 chain2.display();
 
chain3.display();
  chain4.display();
  chain5.display();
 ground.display();
 piece1.display();
piece2.display();
 piece3.display();
 piece4.display();

 bobObject5.display();
  
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-300,y:-300}); } 
} 










