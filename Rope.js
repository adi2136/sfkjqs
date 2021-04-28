class Rope{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetx=offsetx;
        this.offsety=offsety;
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetx,y:this.offsety}

        }
       this.rope=Matter.Constraint.create(options)
       World.add(world,this.rope)
    }
    display(){
        var point1=this.rope.bodyA.position;
        var point2=this.rope.bodyB.position;
        strokeWeight(5);
        var anchor1x=point1.x;
        var anchor1y=point1.y    

        var anchor2x=point2.x+this.offsetx;
        var anchor2y=point2.y+this.offsety;   
        
        line(anchor1x,anchor1y,anchor2x,anchor2y)
    }

}