
/*---------CREATING POINTILLISTIC PAINTING EFFECT FROM IMAGERY TAKEN DIRECTLY FROM LIVE VIDEO--------*/

//GLOBAL VARIABLES
var wdth = 700;
var hght = 500;
var video; //VARIABLE TO STORE LIVE VIDEO FEED
var particles = []; //CREATE AN ARRAY FOR THE PARTICLE SYSTEM
var toppings = [];
var timer = 0; //VARIABLE TO KEEP TRACK OF TIME AND CHANGE SCENE ACCORDINGLY
var counter;
var pizzaPoem = 'sublime triangle you aren’t equilateral a luscious isosceles your geometry’s perfect the way pepperoni lays like isles in mozzarella seas under a bread mantle please i ain’t good at math but i know the right answer to you + me i want to devour you tip-to-tip end-to-end inside and out til i reach your crust and i must have you';
var pizzaTitle = 'PIZZA TIME!';


function preload() {
  
  pizzaTime = loadImage ('assets/pizzatime.jpg');
  onion = loadImage ('assets/onion.jpg');
  mushroom = loadImage ('assets/mushroom.jpg');
  pepperoni = loadImage ('assets/pepperoni.jpg');
  tomato = loadImage ('assets/tomato.jpg');
  
}

function setup() {
  createCanvas(wdth, hght);
  background(50); //NOT REPEATING BAKGROUND SO THAT THE PARTICLES CAN RETAIN THE COLOR FROM VIDEO FEED
  videoRender();
}

function draw() {
  timer++;
  //console.log(timer); //DESBUG LOG
  if (timer < 200) {
 
  video.loadPixels(); //LOAD PIXELS FROM THE VIDEO
  
  for (var i=0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    }
    
  } else if (201< timer < 1000) {
    
    pizzaToppings(); //CALL FUNCTION TO INVOKE PIZZA TOPPINGS ALL OVER THE CANVAS
    
    background(50);
    noStroke();
    fill(255);
    textSize(25);
    text(pizzaTitle, 310, 50); //TITLE FOR THE PIZZA POEM
    
    fill(random(255), random(255), random(255)); //FILL RANDOM COLORS
    image(pizzaTime, 0, 0, 300, 300); //CALL PIZZA IMAGE
    textSize(10); //SET TEXT SIZE
    liveText(); //INVOKE FUNCTION FOR LIVE TEXT
  }  
  
}

function videoRender() {
  video = createCapture(VIDEO); //CAPTURE LIVE VIDEO
    video.size(500, 300); //SET SIZE OF THE VIDEO INVOKED
      for(var i=0; i < 1000; i++){ //CREATE A PARTICLE SYSTEM THAT PICKS COLOR FROM LIVE VIDEO
        particles[i] = new Particle(random(width), random(height)); //HAVE PARTICLES APPEAR ON THE CANVAS AT RANDOM SPOTS
          }
  
}

function liveText () { //CREATE A LIVE TEXT FUNCTION 
  
  if (counter < pizzaPoem.match()){
  counter++;
  }
  text(pizzaPoem.substring(0, counter), 310, 80, 100, 500); //INVOKE PIZZA POEM STORED IN A VARIABLE
  
}

function pizzaToppings () {
  
  for(var p=0; p < 50; p++) { 
    toppings[p] = new Topping (random(width), random(height)); // CALL TOPPING CLASS TO DISPLAY PIZZA TOPPING IMAGES
  }
  
  
}

