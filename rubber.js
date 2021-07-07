class Rubber {
	constructor(x, y) {
		var opt = {
			'restitution':0.3,
			'friction':5,
			'density':1
		}
		this.body = Bodies.circle(x, y, 30, opt);
		this.radius = 30;

		World.add(world,this.body);
	}
	display(){
		var rubpos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(rubpos.x,rubpos.y);
		rotate(angle);
		ellipseMode(RADIUS);
		fill("navy");
		stroke("yellow");
		strokeWeight(4);
		ellipse(0, 0, this.radius, this.radius);
		pop();
	}
}