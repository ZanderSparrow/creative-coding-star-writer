const BACK = 13;
const R1 = 30;
const PADDING = 15;
let x_pos = R1/2 + PADDING;
let y_pos = R1/2 + PADDING;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(BACK);
}

function draw() {
  // not doing anything on loop, just on press
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0) + 3;
    console.log(keyIndex);
    // It's a letter key, make a star
    fill_r = Math.abs(255 - keyIndex * 10);
    fill_g = 255 % (keyIndex * keyIndex);
    fill_b = keyIndex * 10;
    console.log(fill_r, fill_g, fill_b);
    fill(fill_r, fill_g, fill_b);
    // let x = map(keyIndex, 0, 25, 0, width - keyIndex);
    if (y_pos + R1 > windowWidth) {
      y_pos = R1/2 + PADDING;
      x_pos = x_pos + PADDING + R1;
    }
    star(y_pos, x_pos, R1, keyIndex, keyIndex);
    y_pos = y_pos + PADDING + R1;
  } else if (key === " ") {
    keyIndex = 0;
    y_pos = y_pos + PADDING + R1;
  } else {
    // If it's not a letter key, clear the screen
    background(BACK);
    x_pos = R1/2 + PADDING;
    y_pos = R1/2 + PADDING;
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}