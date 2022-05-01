var words = ["crazy", "aggressive", "batshit", "psycho", "cuckoo", "insane", "unhinged", "schizo", "weirdo"];

var index = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
background(0);
fill(255);
textSize(32);
text(words[index], 12, 200);
textFont('Georgia');
}

function mousePressed() {
  index = index +1;
  
  if (index == words.length) {
    index = 0;
  }
}