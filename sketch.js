var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var baseWall, sideWall1, sideWall2;
var baseW;

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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	baseWall = createSprite(width/2, height - 50, 200, 20);
	baseWall.shapeColor = color(255, 0, 0);

	sideWall1 = createSprite(baseWall.x - baseWall.width/2, baseWall.y - 40, 20, 100);
	sideWall1.shapeColor = color(255, 0, 0);

	sideWall2 = createSprite(baseWall.x + baseWall.width/2, baseWall.y - 40, 20, 100);
	sideWall2.shapeColor = color(255, 0, 0);

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true}); 
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} ); 
 	World.add(world, ground);


	baseW = Bodies.rectangle(width/2, 635, 200, 20, {isStatic :true});
	World.add(world, baseW);

	Engine.run(engine);
  
}


function draw() { 
	rectMode(CENTER); 
	background(0); 
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y
	//keyPressed();
	drawSprites();

}

function keyPressed() {

	if(keyCode === 	DOWN_ARROW){

		Body.setStatic(packageBody, false);
		console.log(packageBody.isStatic); 

	}
}