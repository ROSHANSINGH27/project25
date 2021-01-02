
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,binImage,bin,paperImg


function preload()
{
	binImage=loadImage("dustbingreen.png")
	paperImg=loadImage("paper.png")

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,height,1200,20)

	bin=createSprite(650,425,5,5)
bin.addImage(binImage)
bin.scale=0.4

bin1=new Dustbin(610,420,20,30)
bin1.scale=0.1
bin2=new Dustbin(690,420,20,30)
bin2.scale=0.1
bin3=new Dustbin(650,480,20,30)
bin3.scale=0.1

	paper=createSprite(100,300,20)
	paper.addImage(paperImg)
	paper.scale=0.5
paper=new Paper(100,300,20)
	
	  
rectangle1=new Rectangle(610,420,20,30)
	rectangle2=new Rectangle(690,420,20,30)
	rectangle3=new Rectangle2(650,480,20,30)
	 
	Engine.run(engine);
  
}


function draw() {
	background("black")
  rectMode(CENTER);
  background(0);
  
paper.display()
  ground.display()

  bin1.display()
  bin2.display()
  bin3.display()

  rectangle1.display()
  rectangle2.display()
  rectangle3.display()
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:55,y:-60
		})
	}
}



