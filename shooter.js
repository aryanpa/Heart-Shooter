class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.pointB = pointB
        this.shooter = Constraint.create(options);
        World.add(world, this.shooter);
    }

    fly(){
        this.shooter.bodyA = null;
    }

    attach(body){
           this.shooter.bodyA = body;
    }

    display(){
       
        if(this.shooter.bodyA){
            var pointA = this.shooter.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 200) {
                strokeWeight(7);
                line(pointA.x - 30, pointA.y, pointB.x + 10, pointB.y);
                line(pointA.x - 30, pointA.y, pointB.x + 95, pointB.y -3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 1, pointA.y, pointB.x +100, pointB.y);
                line(pointA.x + 1, pointA.y, pointB.x -100, pointB.y- 3);
            }
           
            
            pop();
        }
    }
    
}