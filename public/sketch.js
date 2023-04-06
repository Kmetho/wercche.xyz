let font;
let pg;

let tX, tY, sp, dspx, dspy, fct;

const words = "kachow";

function preload() {
  font = loadFont("./assets/fonts/Isobare-Regular.otf");
}

function setup() {
  createCanvas(400, 400);
  createSliders();
  pg = createGraphics(400, 400);
}

function draw() {
  background(0);

  // PGraphics

  pg.background(0);
  pg.fill(255);
  pg.textFont(font);
  pg.textSize(50);
  pg.push();
  pg.translate(width / 2, height / 2);
  pg.textAlign(CENTER, CENTER);
  pg.text(words, 0, 0);
  pg.pop();

  let tilesX = tX.value();
  let tilesY = tY.value();

  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // WARP
      let waveX = int(
        sin(frameCount * sp.value() + x * y * dspx.value()) * fct.value()
      );
      let waveY = int(
        sin(frameCount * sp.value() + x * y * dspy.value()) * fct.value()
      );

      if (dspx.value() === 0) {
        waveX = 0;
      }

      if (dspy.value() === 0) {
        waveY = 0;
      }

      // image(pg,0,0)

      // SOURCE
      let sx = x * tileW + waveX;
      let sy = y * tileH + waveY;
      let sw = tileW;
      let sh = tileH;

      // DESTINATION
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

function createSliders() {
  tX = createSlider(1, 80, 16, 1);
  tX.position(20, height + 40);

  tY = createSlider(1, 80, 16, 1);
  tY.position(20, height + 100);

  sp = createSlider(0, 1, 0.005, 0.01);
  sp.position(20, height + 160);

  dspx = createSlider(0, 0.1, 0.05, 0.001);
  dspx.position(180, height + 40);

  dspy = createSlider(0, 0.2, 0, 0.01);
  dspy.position(180, height + 100);

  fct = createSlider(0, 300, 100, 1);
  fct.position(180, height + 160);
}
