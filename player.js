class Player {
  constructor(ground) {
    this.alive = true
    this.isJumping = false
    this.scoreSubmitted = false
    
    this.w = 25
    this.h = 25
    
    this.x = 5 + random(0, 350)
    this.y = this.ground - this.h
    
    this.velocity = 0
    this.gravity = 1.5
    this.jumpSpeed = 20
    
    this.ground = ground
    this.color = {
      r: random(150, 255),
      g: random(150, 255),
      b: random(150, 255),
      a: 255/2}
  }
  
  show() {
    stroke(255);
    fill(
      this.color.r,
      this.color.g,
      this.color.b,
      this.color.a
    );
    rect(this.x, this.y, this.w, this.h)
  }
  
  jump() {
    this.velocity += this.jumpSpeed
  }
  
  update(obstacle) {
    if(
      this.x + this.w > obstacle.x &&
      this.y + this.h > obstacle.y &&
      this.x < obstacle.x + obstacle.w &&
      this.y < obstacle.y + obstacle.h
    ){
        this.alive = false
    }
    
    this.y -= this.velocity
    
    if (this.y <= this.ground - this.h) {
      this.y -= this.velocity;
      this.velocity -= this.gravity;
      
      this.isJumping = true
    }
    else {
      this.velocity = 0
      this.y = this.ground - this.h
      
      this.isJumping = false
    }
  }
}