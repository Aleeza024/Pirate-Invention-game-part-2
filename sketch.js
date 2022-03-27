const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var cannon




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  //tower
  tower = new Tower(150, 350, 160, 310);
  //cannon
  cannon = new Cannon(150,90,100,200)
  console.log(cannon)

}

function draw() {
  background(189);
  Engine.update(engine);
  image(backgroundImg, 0, 0, width, height);

  

  
  

 tower.display();
  cannon.display()
 
}



