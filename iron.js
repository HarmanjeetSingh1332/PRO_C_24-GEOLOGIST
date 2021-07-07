class Iron {
    constructor(x, y) {
      var opt = {
        'restitution':0.8,
        'friction':3,
        'density':30
      }
      this.body = Bodies.rectangle(x, y, 50, 50, opt);
      this.width = 50;
      this.height = 50;
  
      World.add(world,this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(72,73,75);
      stroke(129,131,128);
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }