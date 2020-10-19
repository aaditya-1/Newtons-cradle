
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stick;
var ball1, ball2, ball3, ball4, ball5;
var chain, chain2, chain3, chain4, chain5;

// function preload()
// {

// }

function setup() {


  engine = Engine.create();
  world = engine.world;

  // let canvasMouse = Mouse.create(canvas.elt);
  // canvasMouse.pixelRatio = pixelDensity();
  // let opt = {
  //   mouse: canvasmouse
  // }

  // mConstraint = MouseConstraint.create(engine, opt);
  // World.add(world, mConstraint)

  //Create the Bodies Here.
  stick = new Stick(500, 50, 350, 30);

  ball1 = new Ball(400, 300);
  ball2 = new Ball(450, 300);
  ball3 = new Ball(500, 300);
  ball4 = new Ball(550, 300);
  ball5 = new Ball(600, 300);

  chain = new Chain(ball1.body, stick.body, -50 * 2, 0);
  chain2 = new Chain(ball2.body, stick.body, -25 * 2, 0);
  chain3 = new Chain(ball3.body, stick.body, 0 * 2, 0);
  chain4 = new Chain(ball4.body, stick.body, 25 * 2, 0);
  chain5 = new Chain(ball5.body, stick.body, 50 * 2, 0);


  Engine.run(engine);

}


function draw() {
  createCanvas(windowWidth / 2, windowHeight / 1.5);
  rectMode(CENTER);
  background(0);

  noFill();
  noStroke();
  stick.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  noFill();
  strokeWeight(5);
  stroke("White");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  // point(-50 * 2, 0);


  // drawSprites();

}

// function keyPressed() { 
//   if (keyCode === UP_ARROW) { 
//     Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:-85}) 
// } 
// }

function mouseDragged() {
  Matter.Body.setPosition(ball5.body, { x: mouseX, y: mouseY });
}

