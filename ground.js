class Ground {
  constructor(ground) {
    this.y = ground
  }
  
  show() {
    stroke(255)
    line(0, this.y, width, this.y)
  }
}