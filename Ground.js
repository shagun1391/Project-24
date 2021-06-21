class Ground{
    constructor(x,y){

        var options = {
'isStatic' : true,
'restitution': 0.3,
'friction':0.5,
'density' :1.2
        }
this.body=Bodies.rectangle(x,y,800,20,options);
this.width= 800;
this.height = 20;
World.add(world,this.body);
    }
display(){

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);

rect(0,0,this.width,this.height);

fill("green");
pop()
}
};
