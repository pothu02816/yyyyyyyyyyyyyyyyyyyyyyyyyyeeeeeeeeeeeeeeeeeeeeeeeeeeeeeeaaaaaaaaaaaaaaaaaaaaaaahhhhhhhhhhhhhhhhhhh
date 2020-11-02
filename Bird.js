class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.someimage=loadImage("sprites/smoke.png")
    this.trajecotry=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y]
    this.trajecotry.push(position);
    for (var i =0;i<this.trajecotry.length;i++){
      

      image(this.someimage,this.trajecotry[i],[0],[this.trajecotry],[i1])
    }
  }
}
