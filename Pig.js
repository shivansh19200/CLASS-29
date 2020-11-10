class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;
  }
  display(){
    if(this.body.speed < 3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      this.visibility = this.visibility - 5;
      
    }
    
  }
};