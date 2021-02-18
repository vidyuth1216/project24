class dustbin{
    constructor(x,y)
    {
       this.x=x;
       this.y=y;
       this.dustbinWidth = 200;
       this.dustbinHeight= 100;
       this.wallTHickness= 20;
       this.angle= 0;
       
       this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallTHickness,{isStatic : true})
       this.leftWallBody.Bodies.rectangle(this.x-this.dustbinWidth/2,this.y -this.dustbinHeight/2,this.wallTHickness,this.dustbinHeight,{isStatic : true})
       Matter.Body.setAngle(this.leftWallBody,this.angle);

       this.rightWallbody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y -this.dustbinHeight/2,this.wallTHickness,this.dustbinHeight,{isStatic : true})
       Matter.Body.setAngle(this.rightWallbody,-1*this.angle);
       World.add(world, this.bottomBody)
       World.add(world, this.leftWallBody)
       World.add(world, this.rightWallBody);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
}