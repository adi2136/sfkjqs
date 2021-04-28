
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var bob1,bob2,bob3,bob4,bob5,wall1;
var rope1,rope2,rope3,rope4,rope5;
var rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(350,100,300,30)
World.add(world,roof)
bob1=new Bob(250,250,10)
World.add(world,bob1)

bob2=new Bob(300,250,10)
World.add(world,bob2)

bob3=new Bob(350,250,10)
World.add(world,bob3)

bob4=new Bob(400,250,10)
World.add(world,bob4)

bob5=new Bob(450,250,10)
World.add(world,bob5)




rope1=new Rope(bob1.body,roof.body,-100,0)
World.add(world,rope1)
rope2=new Rope(bob2.body,roof.body,-50,0)
World.add(world,rope2)
rope3=new Rope(bob3.body,roof.body,0,0)
World.add(world,rope3)
rope4=new Rope(bob4.body,roof.body,+50,0)
World.add(world,rope4)
rope5=new Rope(bob5.body,roof.body,+100,0)
World.add(world,rope5)



wall=createSprite(350,100,300,20)


	Engine.run(engine);
  
}


function draw() {
  
  background("lightBlue");
  Engine.update(engine)
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();





roof.display();
 drawSprites();
}
function keyPressed(){
	if(keyCode=UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-710,y:0})
	}
}


