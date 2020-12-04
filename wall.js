class Wall{

constructor(x, y) {

this.x = x;
this.y = y;
this.image = loadImage("dustbin.png")
this.angle = 0;

this.bottomBody = Bodies.rectangle(this.x,this.y,200,20,{isStatic:true})
this.leftBody = Bodies.rectangle(1100,600,20,100,{isStatic:true})

Matter.Body.setAngle(this.leftBody,this.angle)
this.rightBody = Bodies.rectangle(1300,600,20,100,{isStatic:true})
Matter.Body.setAngle(this.rightBody,-1 * this.angle)

World.add(world, this.bottomBody);

World.add(world, this.leftBody);

World.add(world, this.rightBody);
}

display(){
var posBottom = this.bottomBody.position;
var posRight = this.rightBody.position;
var posLeft = this.leftBody.position;

push();
translate(posBottom.x, posBottom.y);
rectMode(CENTER);
strokeWeight(4);
stroke("green");
fill(255);
//rect(0,0,200,20);
imageMode(CENTER)
image(this.image,0,-100,200,200)

pop();

push();
translate(posLeft.x, posLeft.y);
rectMode(CENTER);
angleMode(RADIANS)
rotate (this.angle)
strokeWeight(4);
stroke("green");
fill(255);
//rect(0,0,20,100);
pop();

push();
translate(posRight.x, posRight.y);
rectMode(CENTER);
angleMode(RADIANS)
rotate (-1 * this.angle)
strokeWeight(4);
stroke("green");
fill(255);
// rect(0,0,20,100);
pop();
 }
}