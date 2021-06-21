class Dustbin2{
    constructor(x,y){
        var options = {
            'isStatic' : true,
            'restitution': 0.3,
            'friction':0.5,
            'density' :1.2
                    }
       
this.body=Bodies.rectangle(x,y,200,20,options);
this.width=20;
this.height = 150;
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


