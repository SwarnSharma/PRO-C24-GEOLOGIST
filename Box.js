class Box {
    constructor(x, y) {
      var options = {
        'density':50,
        'friction': 10,
        'restitution':0.2
      };
      this.body = Bodies.rectangle(x, y, 125, 125, options);
      this.width = 120;
      this.height = 120;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
      var boxpos=this.body.position;	
      push();
      translate(boxpos.x, boxpos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('pink')
      fill('yellow')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };