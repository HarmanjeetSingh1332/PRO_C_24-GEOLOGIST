class Stone {
  constructor(x, y) {
    var opt = {
      'restitution':0.8,
      'friction':0.9,
      'density':12
    }
    this.body = Bodies.rectangle(x, y, 70, 70, opt);
    this.width = 70;
    this.height = 70;

    World.add(world,this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(120,114,118);
    stroke(199,198,193);
    strokeWeight(4);
    rect(0, 0, this.width, this.height);
    pop();
  }
}