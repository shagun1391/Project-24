class Paper{
    constructor(x,y){

        var options = {
'isStatic' : true,
'restitution': 0.3,
'friction':0.5,
'density' :1.2
        }
this.body=Bodies.rectangle(5,150,50,50,options);

this.width= width;
this.height = height;
World.add(world,this.body);
    }
display(){

var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
fill("green");
ellipse(250,200,30,30)
pop()

}
};