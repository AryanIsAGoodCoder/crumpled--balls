/*class Rope {

    constructor(body1,body2,offsetX,offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={

            bodyA:body1,
            bodyB:body2,
            pointB:{x: this.offsetX,y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display() {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X=pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


    }*/





//}
/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     attach(){
         this.sling.bodyA=body;
     }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}*/

/*class Rope {

    constructor() {


        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness : 0.04,
            length:10,
        }

        this.object = Constraint.create(options);
        World.add(world,this.object);

    }

    display() {

        var pointA = this.object.bodyA.position;
        var pointB = this.object.bodyB.position;

        push();

        line (pointA.x,pointA.y,pointB.x,pointB.y);

        pop();


    }

}*/
class  Rope{

    constructor (bodyA,bodyB) {
        var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness:0.04,
        length:150,
    }

    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }

    display() {
    strokeWeight(2);
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
   
    }
}

