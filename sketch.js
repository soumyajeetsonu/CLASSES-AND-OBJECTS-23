const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var Box1,Box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Box1=new Box(230,100,50,100);
    Box2= new Box(200,300,50,50);

    ground=new Ground(200,390,400,25);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
    Box1.display();
    Box2.display();

    ground.display();

}