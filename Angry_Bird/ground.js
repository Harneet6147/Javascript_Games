class Ground extends Box {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.body.isStatic = true;
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0,176,0);
        imageMode(CENTER);
        image(grassImg,0, 0, this.w, this.h);
        pop();
    }
}