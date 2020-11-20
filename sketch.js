const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var bobobj1,bobobj2,bobobj3,bobobj4,bobobj5
var roof1
var chain1

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
	world = engine.world;

	//Creating bob 
	bobobj1 = new Bob(400,400,100);
	bobobj2 = new Bob(320,400,100);
	bobobj3 = new Bob(360,400,100)
	bobobj4 = new Bob(440,400,100);
	bobobj5 = new Bob(280,400,100);
	// creating roof
	roof1 = new Roof(350,100,200,20);

	chain1 = new Chain(bobobj1.body,roof1.body,0,0);
	
	/*var p1 = Constraint.create(constraint1)
	var p2 = Constraint.create(constraint2)
	var p3 = Constraint.create(constraint3)
	var p4 = Constraint.create(constraint4)
	var p5 = Constraint.create(constraint5)

	World.add(world,p1);
	World.add(world,p2);
	World.add(world,p3);
	World.add(world,p4);
	World.add(world,p5);*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
//   displaying bob
  bobobj1.display();
  bobobj2.display();
  bobobj3.display();
  bobobj4.display();
  bobobj5.display();
// displaying roof
  roof1.display();

  chain1.display();
  drawSprites();
 
}



