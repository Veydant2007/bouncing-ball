const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine, myWorld,ball,ground
function setup() {
  createCanvas(800,400);
 myEngine = Engine.create();
 myWorld = myEngine.world
 var options1 = {
   restitution:1
 }
 ball = Bodies.circle (200,200,20,options1)
 var options= {
   isStatic:true
   }
 ground = Bodies.rectangle(400,390,800,10,options)
 World.add(myWorld,ball)
 World.add(myWorld,ground)
}
function draw() {
  Engine.update(myEngine);
  background(255,255,255);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  drawSprites();
 
 
}