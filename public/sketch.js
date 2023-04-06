let font;
let anim;


function preload() {
  font = loadFont("./assets/fonts/Isobare-Regular.otf");
}

function setup() {
  createCanvas(window.innerWidth / 2, window.innerHeight);
  anim = createGraphics(window.innerWidth / 2, window.innerHeight);
}

function draw() {
  background(0);
  noFill();
  rect(0, 0, window.innerWidth / 2, window.innerHeight);

  anim.background(0);
  anim.fill(255);
  anim.textFont(font);
  anim.textSize(50);
  anim.push();
  anim.translate(width / 4, height);
  anim.textAlign(CENTER, CENTER);
  anim.text("wercche.xyz", 0, 0);
  anim.pop();

  image(anim, 0, 0);
}
