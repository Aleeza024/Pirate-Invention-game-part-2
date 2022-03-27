class Cannon {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.image = loadImage("./assets/CANON.png");
      this.image2 = loadImage("./assets/cannon_base.png")
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      image(this.image2,8,30,260,220)
      
      pop();

      //arc(this.x-20,this.y+90,140,200,PI,TWO_PI)
      //arc(this.x-20,this.y+100,140,200,PI,TWO_PI)

    }

  }
  