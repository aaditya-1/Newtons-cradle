class Chain {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var opt = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: { x: this.offsetX, y: this.offsetY }
        }

        this.chain = Constraint.create(opt);

        World.add(world, this.chain);

    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(4);
        stroke("silver")

        var pointA1 = pointA.x;
        var pointA2 = pointA.y;

        var pointB1 = pointB.x + this.offsetX;
        var pointB2 = pointB.y + this.offsetY;

        line(pointA1, pointA2, pointB1, pointB2);
    }
}