class dustbin{
  constructor(x,y,w,h){
    var opction = {
        isStatic:true
    }
    

    this.bottom = Bodies.rectangle(x-90,y-90,100,90,opction);
    World.add(world,this.bottom)

   

    this.image = loadImage("dustbingreen.png")
    this.w = w
    this.h = h
  }
    
  ascreen(){
    rectMode(CENTER)
    
    
    
    rect(this.bottom.position.x,this.bottom.position.y,1,1)
   
    
    image(this.image, this.bottom.position.x, this.bottom.position.y, 100, 100);
  }
    
}