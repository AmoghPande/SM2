var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var options = {isStatic:true}
	b1=Bodies.rectangle(290,610,20,100,options);
	b2=Bodies.rectangle(400,650,200,20,options);
	b3=Bodies.rectangle(500,610,20,100,options);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 World.add(world, b1);
	 World.add(world, b2);
	 World.add(world, b3);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill("red");
  rect(b1.position.x,b1.position.y,20,100);
  rect(b2.position.x,b2.position.y,200,20);
  rect(b3.position.x,b3.position.y,20,100);
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   	Matter.Body.setStatic(packageBody,false);
    
  }
}