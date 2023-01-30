class SlingShot {
    constructor(x, y, body) {

        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: 0.08,
            length: 50
        }
        this.sling = Constraint.create(options);
        Composite.add(world, this.sling);
    }

    fly() {
        this.sling.bodyB = null;
    }


    show() {
        if (this.sling.bodyB) {
            stroke(255);
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            fill(0);
            line(posA.x, posA.y, posB.x, posB.y);
        }

    }

    attach(body) {

        this.sling.bodyB = body;
    }
}