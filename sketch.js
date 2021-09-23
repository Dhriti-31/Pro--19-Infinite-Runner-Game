const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball;




function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
var options = {
  isStatic: true,
  restitution: 0.5
}
ball = Bodies.circle (400,200,20,options);


}

function draw() {
  background(255,255,255);  
}