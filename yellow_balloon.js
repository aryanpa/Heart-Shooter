class yellowBalloon {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("yellow_balloon.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var balloonPos=this.body.position;	

      push();
      translate(balloonPos.x, balloonPos.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      rectMode(CENTER);
      image(this.image, 0,0,this.width, this.height);
      pop();
    }
  }
