/*----CREATE A CLASS FOR THE PARTICLE SYSTEM TO RANDOMLY SPAWN PARTICLES ON THE CANVAS----*/

function Particle (x, y) {
  this.x = x;
  this.y = y;
  
  this.update = function () {
    this.x += random (-10, 10);
    this.y += random (-10, 10);
    
    if (this.x > width) { //MAKE THE PARTICLES LIVE INSIDE THE CANVAS BOUNDARIES
      this.x = 0;
      
    }
     if (this.y > height) {
      this.y = 0;
      
    }
  }
  
  this.show = function () {
    
    noStroke();
    var px = floor(this.x);
    var py = floor(this.y);
    var col = video.get(px, py);
    fill(col[0], col[1], col[2], 100);
    //console.log(col); //DEBUG LOG
    ellipse(this.x, this.y, 9, 9);
    
  }
}