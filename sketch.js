const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,brick,ironRod,box;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;
var edges;

function setup(){
    var canvas = createCanvas(1365,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(700,height,1400,20);
    plane1 = new Plane(0,300,20,1000);
    plane2 = new Plane(1365,300,20,1000);
    plane3 = new Plane(700,0,1400,20);
    hammer = new Hammer(400,200);
    rubber = new Rubber(200,100,70);
    brick = new Brick(400,100);
    box = new Box(1200,100);
    ironRod = new IronRod(600,100);
    ball1 = new Ball(900,500,10);
    ball2 = new Ball(920,500,10);
    ball3 = new Ball(940,500,10);
    ball4 = new Ball(960,500,10);
    ball5 = new Ball(980,500,10);
    ball6 = new Ball(1000,500,10);
    ball7 = new Ball(1020,500,10);
    ball8 = new Ball(1040,500,10);
    ball9 = new Ball(1060,500,10);
    ball10 = new Ball(1080,500,10);
    

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    plane1.display();
    plane2.display();
    plane3.display();
    hammer.display();
    rubber.display();
    brick.display();
    ironRod.display();
    box.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
}