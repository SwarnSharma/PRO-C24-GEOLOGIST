class IronRod {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 125,15, options);
      this.width = 120;
      this.height = 10;
      World.add(world, this.body);
    };
    display(){
      var angle = this.body.angle;
      var IronRodpos=this.body.position;	
      push();
      translate(IronRodpos.x, IronRodpos.y);
      rotate(angle);
      strokeWeight(6);
      stroke('black')
      fill('silver')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };