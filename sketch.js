const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall3,wall2;
var ground,paper;

function setup() {
	var canvas = createCanvas(800,600);
	engine = Engine.create();
	world = engine.world;

  	paper = new Paper(100,400,15);

  	wall1 = new Wall(500,430,20,100);
    wall2 = new Wall(710,430,20,100);
    wall3 = new Wall(600,470,200,20);

    ground = new Ground(400,480,800,10);
    
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  paper.display();
  wall2.display();
  wall3.display();
  wall1.display();
  ground.display();

  
}

function keyPressed() {

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:32,y:-33})
	
	   }
	 }