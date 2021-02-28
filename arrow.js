class Arrow {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("arrow.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      rectMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  }
  