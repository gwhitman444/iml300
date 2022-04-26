window.addEventListener("load", () => {
  const name = sessionStorage.getItem("NAME");
  document.getElementById("result-name").innerHTML = name;
});


$(document).ready(function() {
   $("#line1").fadeIn(500, function() {
      $("#line2").fadeIn(1500, function() {
          $("#line3").fadeIn(2000);
      }); 
   });
});


let particles = [];
var canvas;

function setup() {
createCanvas(window.innerWidth, window.innerHeight)
  for (let i = 0; i < 10; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
background(255, 255, 255);
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.speed = createVector(random(-10, 10), random(-10, 10));
    this.c = color(random(50), random(200), random(200));
    this.r = random(10, 100);
  }
  
  move() {
    
    this.pos.add(this.speed);
    
    if (this.pos.x < 0) {
      this.speed.x = abs(this.speed.x);
    } else if (this.pos.x > width) {
      this.speed.x = -abs(this.speed.x);
    }
    
    if (this.pos.y < 0) {
      this.speed.y = abs(this.speed.y);
    } else if (this.pos.y > height) {
      this.speed.y = -abs(this.speed.y);
    }
    
  }
  
  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r);
  }


}
