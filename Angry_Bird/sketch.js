
const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Constraint, Composite } = Matter;
let ground, bird;
const boxes = [];
let engine;
let world;
let mConstraint, slingshot;
let dotImg;
let boxImg;
let backImg;
let grassImg;

function preload() {
  dotImg = loadImage('angry_bird.png');
  boxImg = loadImage('covid.jpg');
  backImg = loadImage('back.jpg');
  grassImg = loadImage('grass.jfif');
}

function setup() {

  const canvas = createCanvas(innerWidth, 750);

  engine = Engine.create();
  world = engine.world;
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(1100, 300 - i * 100, 200, 200);
  }
  ground = new Ground(width / 2, height - 10, width, 30);
  bird = new Bird(300, 600, 30);

  slingshot = new SlingShot(300, 600, bird.body);


  let mouse = Matter.Mouse.create(canvas.elt);
  mouse.pixelRatio = 2;
  const options = {
    mouse: mouse
  };

  mConstraint = Matter.MouseConstraint.create(engine, options);
  Composite.add(world, mConstraint);


}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, bird.body);
    bird = new Bird(300, 600, 30);
    slingshot.attach(bird.body);

  }
  if (key == 'ENTER') {
    init();
  }
}

function mouseReleased() {

  setTimeout(() => {
    slingshot.fly();

  }, 30);
}

function draw() {
  background(100, 190, 205);
  imageMode(CORNER);
  image(backImg, 0, 0, innerWidth, innerHeight);

  Matter.Engine.update(engine);

  ground.show();
  boxes.forEach((box) => {
    box.show();
  })
  slingshot.show();
  bird.show();
}
