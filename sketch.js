
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var ground;
var pa,r1,r2,r3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	r1 = new Dustbin1(580,360,10,90)
	r2 = new Dustbin2(470,300,10,90)
	r3 = new Dustbin2(690,300,10,90)
	pa = new Paper(10,10,10,10)
	ground=new Ground(400,380,10,20);
	

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  //Render.run(render);
	 
  
}


function draw() {

	
	
  rectMode(CENTER);
  background(0);
  r1.display();
  r2.display();
  r3.display();
  pa.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(pa.body,pa.body.position,{x:130,y:-145});

  
    }
}





