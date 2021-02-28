class Human {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.image1 = loadImage("boy.png");
      this.image2 = loadImage("girl.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image1,440,487,200,150);
      image(this.image2,50,487,200,150)
    }
  }
  