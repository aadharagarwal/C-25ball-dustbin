
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var g
var ball
var bin1,bin2,bin3


	
function setup() {
	createCanvas(1300, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;   

	//Create the Bodies Here.
    
	 g = new ground(width/2,470,width,20)
	 ball = new paper(100,400,70)
	 bin1 = new dustbin(1100,450,10,900)
	// bin2 = new dustbin(x,y,width,height)
	// bin3 = new dustbin(x,y,width,height)
	//Engine.run(engine);
  
}


	
function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);
 
  ball.display()
  g.display()
  bin1.ascreen()
 // bin2.ascreen()
  //bin3.ascreen()
}

function keyPressed(){
	if(keyCode === UP_ARROW){  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}
