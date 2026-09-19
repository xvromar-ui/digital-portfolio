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
  let backColor = color(255, 204, 0);
  let color1 = color("aquamarine");
  let color2 = color("cornflowerblue");
  let color3 = color("crimson");
  let color4 = color("beige");


  // Create the 2d array
  for (let row = 0; row < 4; row++) {
    blocks[row] = new Array(4);
  }

  // Instantiate and add blocks to the Quilt
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {

      // I am adding a single kind of block here
      // to each row and column.  Add blocks you 
      // make and blocks you download from others
      // in your Quilt.
      if(col % 2){
        blocks[row][col] = new HourGlass(100, 100, backColor, color3, color4);
    }else{
      blocks[row][col] = new HourGlass(100, 100, backColor, color1, color2);
    }

      // Since I built a simple rotation flag into
      // my FourPatch block, here I am rotating
      // every third row.  You do what you like.
      myQuilt.addBlock(blocks[row][col], row, col);
    }
  }

  // Draw it now
  myQuilt.render();
}