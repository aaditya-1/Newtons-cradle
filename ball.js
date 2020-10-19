class Ball {
    constructor(x, y) {
        var opt = {
            isStatic: false,
            'restitution': 1,
            'friction': 0,
            'frictionAir': 0,
            'slop': 1,
            'inertia': Infinity
        }
        // var r = this.r
        this.body = Bodies.circle(x, y, 50 / 2, opt);
        // this.r = r;

        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(0, 0, 50, 50);
        pop();
    }
}