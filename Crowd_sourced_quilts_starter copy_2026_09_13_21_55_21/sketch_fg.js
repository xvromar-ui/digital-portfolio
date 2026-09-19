// Some SVG colors for ya
// https://www.december.com/html/spec/colorsvgsvg.html
// https://p5js.org/reference/#/p5/color

// Standard "run once" component of Processing/P5JS idiom
function setup() {
  createCanvas(400, 400);
  background("bisque");

  // Not providing any interactivity right now
  noLoop();
  console.log("Starting...");

  myQuilt = new Quilt(4, 4, 100, color(0, 204, 128));

  let blocks = [];
  let backColor = color("lightblue");
  let color1 = color("mediumseagreen");
  let color2 = color("teal");

  // Create the 2d array
  for (let row = 0; row < 4; row++) {
    blocks[row] = new Array(4);
  }

  // Instantiate and add blocks to the Quilt
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {

      let blockColor;
      if (row % 2 === 0) {
        blockColor = color1;
      } else {
        blockColor = color2;
      }

      let isLeft;
      if (col % 2 === 0) {
        isLeft = true;
      } else {
        isLeft = false;
      }

      blocks[row][col] = new FlyingGeese(100, 100, backColor, blockColor, isLeft);
      myQuilt.addBlock(blocks[row][col], row, col);
    }
  }

  // Draw it now
  myQuilt.render();
}