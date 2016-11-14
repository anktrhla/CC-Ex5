/*----CREATE A CLASS FOR THE PIZZA TOPPINGS RANDOMLY SPAWN ON THE CANVAS----*/

function Topping (x, y) {
  this.x = x;
  this.y = y;
  
  this.update = function () {
    this.x += random (-50, 50);
    this.y += random (-50, 50);
    
    if (this.x > width) { //MAKE THE TOPPINGS LIVE INSIDE THE CANVAS BOUNDARIES
      this.x = 0;
      
    }
     if (this.y > height) {
      this.y = 0;
      
    }
  }
  
  this.show = function () { //SHOW FUNCTION FOR PIZZA TOPPINGS
    
    image(onion, this.x, this.y); //LOAD ALL IMAGES OR THE PIZZA TOPPINGS
    image(tomato, this.x, this.y);
    image(pepperoni, this.x, this.y);
    image(mushroom, this.x, this.y);
    
  }
}