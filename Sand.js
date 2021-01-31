class Sand{
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':0.8
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("green");
        fill("yellow");
        ellipse(0,0,this.r,this.r);
        pop()
    }
}