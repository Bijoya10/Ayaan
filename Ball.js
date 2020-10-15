class Ball {
    constructor(x,y){
        var options = {
            restitution:1,
			friction:0,
			density:0.8
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position

        push();
        fill("brown");
        stroke("blue");
        translate(pos.x,pos.y)
        strokeWeight(4);
        ellipseMode(RADIUS);
        ellipse(0, 0,this.radius,this.radius);
        pop();
    }
}