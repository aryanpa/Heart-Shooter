class Heart {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("heart.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var heartPos=this.body.position;	
      push()
      translate(heartPos.x, heartPos.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      rectMode(CENTER);
      image(this.image, 0,0,this.width, this.height)
      pop()
    }
  }
  