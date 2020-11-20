class Bob{
    constructor(x,y){
        var options={
            isStatic:true,
            density:1.2,
            restituion:0.3,
            friction:0.5,

        }
        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        strokeWeight = 1
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
    }
}