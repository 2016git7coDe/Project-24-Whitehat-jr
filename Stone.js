class Stone{
    constructor(x,y,width,height){
        var options = {
            'density':1,
            'fricton':1,
            'restitution':0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        strokeWeight(6);
        stroke("white");
        fill("grey");
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();   
    }
}