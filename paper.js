class Paper {
    constructor() {
        var options = {
            isStatic: false,
            'restitution': 0.2,
            'friction': 0.8,
            'density': 1.2
        }
        this.body = Bodies.circle(100, 500, 50, options);
        this.radius = 50;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("purple");
        circle(0, 0, 50);
        pop();
    }
};
