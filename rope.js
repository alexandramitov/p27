class rope {
    constructor(body1, body2, offsetX, offsetY)
    {
       this.offsetX = offsetX
       this.offsetY = offsetY
       var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        //console.log(options);
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly()
    {
       this.rope.bodyA = null;
    }
    display(){
        if(this.rope.bodyA)
        {
        var pointA = this.rope.bodyA.position;
        var pointB = this.point;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }


    }
    
}