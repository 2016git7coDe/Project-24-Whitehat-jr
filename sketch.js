
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
    ground = new Ground(600,400,1200,20);
    stone = new Stone (300,100,100,100);
    rubber = new Rubber(700,200,20,20);
    sand1 = new Sand(500,50,3,3);
    sand2 = new Sand(520,50,3,3);
    sand3 = new Sand(530,50,3,3);
    sand4 = new Sand(540,50,3,3);
    sand5 = new Sand(550,50,3,3);
    sand6 = new Sand(560,50,3,3);
    sand7 = new Sand(570,50,3,3);
    sand8 = new Sand(580,50,3,3);
    sand9 = new Sand(590,50,3,3);
    sand10 = new Sand(600,50,3,3);
    iron = new Iron(100,100,50,50);

    hammer = new Hammer(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  Engine.update(engine);
  ground.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();
  hammer.display();
  fill("blue")
  textSize(50);
textFont("Jokerman");
  text("GEOLOGIST",450,100);
 
}



