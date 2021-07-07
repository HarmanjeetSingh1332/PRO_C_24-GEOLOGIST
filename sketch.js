const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var iron, rubber, stone, hammer;
var ground;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    iron = new Iron(300,580);
    rubber = new Rubber(850,580);
    stone = new Stone(770,580);
    hammer = new Hammer(10,100);
    ground = new Ground(600,height,1200,30);
  
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    iron.display();
    rubber.display();
    stone.display();
    hammer.display();
    ground.display();
}