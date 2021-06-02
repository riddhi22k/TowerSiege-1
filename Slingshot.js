class Slingshot{
  constructor(bodyA,pointB){
      var options= {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.03,
          length : 11
      }
      this.image = loadImage("polygon.png");
      this.pointB = pointB ;
      this.sling = Constraint.create(options);
      World.add(world,this.sling);
  }

  fly () {
     this.sling.bodyA=null;
  }
  attach(body) {
      this.sling.bodyA=body;
  }

  display() {
     if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;

    push();
    imageMode(CENTER);
    image(polygon_img,ball.position.x,ball.position.y,40,40);
    strokeWeight(2);
    stroke(113,94,188);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
     }
  }
}