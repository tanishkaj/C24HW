
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var x = 10;
	paperSprite = createSprite(10, 80, 40, 40);
	paperSprite.shapeColor = color("white");

	side1Sprite=createSprite(width/2+500, height-50, 200, 20);
	side1Sprite.shapeColor=color("red");

	side2Sprite=createSprite((width/2)+400, height-90, 20, 100);
	side2Sprite.shapeColor=color("red");

	side3Sprite=createSprite((width/2)+600, height-90, 20, 100);
	side3Sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options = {
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}

	paperObject = Bodies.circle(width/2, 200, 5, options);
	World.add(world, paperObject);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperSprite.x = paperObject.position.x;
  paperSprite.y = paperObject.position.y;

  drawSprites();
 // keyPressed();

}

function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject, paperObject.position, {x:2,y:-5});
	}

}


