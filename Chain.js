class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        push();
        stroke("black");
        strokeWeight(4);
        line(pos.x,pos.y,pos2.x + this.offsetX,pos2.y+ this.offsetY);
        pop();
    }
}