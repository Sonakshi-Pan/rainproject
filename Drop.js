class Drop{
    constructor(x,y,radius){
     
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          }
          this.radius=radius;
          //this. maxDrops =[]
          
          
          this.body = Bodies.circle(x,y,radius,options);
          World.add(world, this.body)
        
    }
   
    display(){
        var pos=this.body.position
       
        push(); 
       ellipseMode(RADIUS);
        fill (198,21,151);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop() ;

       

        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)}) 
        }
        
    
      
       
    }
}