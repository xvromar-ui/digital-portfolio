// Some SVG colors for ya
// https://www.december.com/html/spec/colorsvgsvg.html
// https://p5js.org/reference/#/p5/color

// Standard "run once" component of Processing/P5JS idiom
function setup() {
  createCanvas(600, 600);
  background("bisque");

  // Not providing any interactivity right now
  noLoop();
  console.log("Starting...");

  myQuilt = new Quilt(6, 6, 100, color(0, 204, 128));

  let blocks = [];
  let backColor = color(255, 204, 0);
  let color1 = color("darkorchid");
  let color2 = color("darkslateblue");
  let color3 = color("black");
  let color4 = color("plum");
  let color5 = color("midnightblue");
  let color6 = color("royalblue");
  let color7 = color("tomato");
  let color8 = color("gold");
  let color9 = color("maroon");
  let color10 = color("salmon");
  let color11 = color("wheat");
  let color12 = color("pink");

  // Create the 2d array
  for (let row = 0; row < 6; row++) {
    blocks[row] = new Array(6);
  }

  // Instantiate and add blocks to the Quilt
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      let pattern = (row + col) % 5;


      if (pattern === 0) {
      // RailFence version 1
      blocks[row][col] = new RailFence(100, 100, backColor, color1, color2, color3, color4, true);

    } else if (pattern === 1) {
      // RailFence version 2
      blocks[row][col] = new RailFence(100, 100, backColor, color7, color9, color3, color12, false);

    } else if (pattern === 2) {
      blocks[row][col] = new FourPatch(100, 100, backColor, color10, color11);

    } else if (pattern === 3) {
      // LogCabin version 1
      blocks[row][col] = new LogCabin(100, 100, color5, color6, color7, color8, color9, true);

    } else {
      // LogCabin version 2
      blocks[row][col] = new LogCabin(100, 100, color5, color6, color7, color8, color9, false);
    }
      
      myQuilt.addBlock(blocks[row][col], row, col);
    }
  }

  myQuilt.render();
}