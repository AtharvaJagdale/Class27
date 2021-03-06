const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(920,320,70,70);
    ground=new Ground(600,height,1200,30); 
    pig1=new Pig(810,320,50,50) 
    log1=new Log(810,300,20,300,PI/2) 
    box3=new Box(700,250,70,70) 
    box4=new Box(920,250,70,70)
    pig2=new Pig(810,250,50,50)
    log2=new Log(810,190,20,300,PI/2)
    box5=new Box(810,150,70,70)
    bird1=new Bird(250,380,50,50)
    log3=new Log(740,150,20,160,PI/7)
    log4=new Log(860,150,20,160,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display()
box3.display()
box4.display()
box5.display()
bird1.display()
log3.display()
log4.display()
}

