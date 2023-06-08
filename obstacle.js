class Obstacle {
  constructor(ground) {
    this.w = 50
    this.h = setHeight()
    
    this.x = width
    this.y = ground - this.h
    
    this.ground = ground
    this.speed = setSpeed()
  }
  
  show() {
    stroke(255);
    fill(255);
    rect(this.x, this.y, this.w, this.h)
  }
  
  update() {
    this.x += this.speed
    
    if (this.x + this.w < 0) {
      this.h = setHeight()
      
      this.x = 2 * width
      this.y = this.ground - this.h
      
      this.speed = setSpeed()
    }
  }
  

}

function setHeight() {
    return random(150,225)
    //return 150
    //return 225
  }
  
function setSpeed() {
    return random(-15,-45);
    //return -15
    //return -45
  }