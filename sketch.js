const Engine=Matter.Engine //we are using namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var box1;
var log1;

function setup() {
  createCanvas(1200,400);
  //creating myengine
  engine=Engine.create();

  //creating connection between my engine and my world

  world=engine.world;
  //this will create a box
  //lets change both the boxes x position to 200
  ground=new Ground (600,height,1200,20);
  box1= new Box(700,320,70,70);

  box2=new Box (920,320,70,70);

 piggy1=new piggy(810,350);

 log1=new log(810,260,300,PI/2)
 //layer 2
 box3=new Box(700,240,70,70);
 box4=new Box(920,240,70,70);

 log2=new log(810,180,300,PI/2);
 piggy2=new piggy(810,220);
 //layer3
 box5=new Box(810,160,70,70);
 log4=new log(760,120,150,PI/7);
 log5=new log(870,120,150,-PI/7);
 birdy1=new birdy(100,100);
}

function draw() {
  background(0); 
  Engine.update( engine);
  //this will display the box1
 box1.display();
 box2.display();
 ground.display();
 piggy1.display();
 log1.display();
 box3.display();
 box4.display()
piggy2.display();
 log2.display();
 box5.display();
 log4.display();
 log5.display();
birdy1.display();

}