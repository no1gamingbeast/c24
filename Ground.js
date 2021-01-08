class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
          }  
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
    
    //
    World.add(world,this.body); 
        }

    display()
    { //this is to make the rectangle in centre
        rectMode(CENTER);
        // rect(200,200,50,50) ; 
        fill("brown");
         rect(this.body.position.x,this.body.position.y,this.width,this.height);
         

    }
}