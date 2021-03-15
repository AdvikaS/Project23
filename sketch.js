var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomBox;
var leftBox;
var rightBox;
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
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomBox=createSprite(400,650,200,20);
	bottomBox.shapeColor="red";
	bottomBox.isStatic=true

	leftBox=createSprite(293,610,20,100);
	leftBox.shapeColor="red";
	leftBox.isStatic=true;

	rightBox=createSprite(510,610,20,100);
	rightBox.shapeColor="red";
	rightBox.isStatic=true;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	  
	bottomBox= Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world, bottomBox);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false)
 
	
  }
}



