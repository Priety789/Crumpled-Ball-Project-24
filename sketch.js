var ball, ground;
var dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function setup() {
    createCanvas(1000, 700);

    engine = Engine.create();
    world = engine.world;

    ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
    World.add(world, ground);

    ball = new Paper();

    dustbin1 = new Dustbin(550, 650, 200, 20);
    dustbin2 = new Dustbin(440, 600, 20, 100);
    dustbin3 = new Dustbin(660, 600, 20, 100);

	Engine.run(engine);
}


function draw() {
    background(0);
    ball.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: -85});
    }

    drawSprites();
}
