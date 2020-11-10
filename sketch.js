const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gameState = "attach"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 350, 200);

    box1 = new Box(800,520,70,70);
    box2 = new Box(1020,520,70,70);
    pig1 = new Pig(910,550);
    log1 = new Log(910,460,300, PI/2);

    box3 = new Box(800,440,70,70);
    box4 = new Box(1020,440,70,70);
    pig3 = new Pig(910, 420);

    log3 =  new Log(910,380,300, PI/2);

    box5 = new Box(910,360,70,70);
    log4 = new Log(860,320,150, PI/7);
    log5 = new Log(970,320,150, -PI/7);

    bird = new Bird(150,300);

    sling = new Slingshot(bird.body, {x: 170 , y: 240});

     

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    sling.display();
}

function mouseDragged(){
    if(gameState == "attach"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY})
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "fly";
}
function keyPressed(){
    if(keyCode == 32){
        Matter.Body.setPosition(bird.body , {x: 150 , y: 300});
        sling.attach(bird.body);
        gameState = "attach";
    }
}
