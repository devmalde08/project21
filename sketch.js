
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20);
	left=new Ground(1100,600,20,120);
	right=new Ground(1350,600,20,120);

	ball_options={
		restitution:0.3,
		density:1.2
	}
	ball= Bodies.circle(260,100,20,ball_options);

	World.add(world,ball);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  left.show();
  right.show();


  push();
  stroke("blue")
  fill("black")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  pop()

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}




