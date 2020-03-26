function setup() {
  const w = 1000;
  const h = 1000;
  createCanvas(w, h);
  let img = createImage(w, h);
  img.loadPixels();
  for (let i = 0; i <= w; i++) {
    for (let j = 0; j <= h; j++) {
      const x = map(i, 0, w, -2, 2);
      const y = map(j, 0, h, -2, 2);
      const [inMandelbrot, abs] = isCoordinateInMandelbrot(x, y);
      if (inMandelbrot) {
        img.set(i, j, color(map(abs, 0, 3, 0, 255)));
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}

function draw() {}

const iterations = 100;
function isCoordinateInMandelbrot(x, y) {
  let zX = 0;
  let zY = 0;
  let abs = 0;
  for (let i = 0; i <= iterations; i++) {
    const newZx = zX * zX - zY * zY + x;
    const newZy = 2 * zX * zY + y;
    zX = newZx;
    zY = newZy;
    abs = sqrt(zX * zX + zY * zY);
    if (abs > 2) {
      return [false, abs];
    }
  }
  return [true, abs];
}
