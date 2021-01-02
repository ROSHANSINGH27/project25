class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
          }
         
          this.body=Bodies.circle(x,y,radius,options)
          this.radius=radius
          this.image=loadImage("paper.png")
           this.image.scale=0.5
          World.add(world,this.body)
    }
    
    
    display() {
    
        fill("yellow")

    ellipseMode(RADIUS)
    
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    } 
    
    
    }