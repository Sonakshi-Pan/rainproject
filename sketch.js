const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops
var man

function preload(){
  
}

function setup(){
  createCanvas(500,700)  
  engine = Engine.create();
  world = engine.world;

 drops = new Drop(100,200,5)
 man= new Man(140,200,500)
 


}


function draw(){
  background(0)
  rectMode(CENTER)
   Engine.update(engine); 
  man.display();
  drops.display();
 
  
}   

