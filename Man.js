class Man {
    constructor(x,y,radius){
     
        var options={
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
          }
          this.radius=radius;
        
          this.image = loadImage("WalkingFrame/walking_1.png")

          
          this.body = Bodies.circle(x,y,radius,options);
          World.add(world, this.body)
    }
   
    display(){
        var pos=this.body.position
        push(); 
       imageMode(image);
      // console.log(this.body.position)
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop() ;  
    }
}