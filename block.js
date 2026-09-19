// Parent class
class Block {
  constructor(width, height, backColor) {
    this.height = height;
    this.width = width;
    this.backColor = backColor;
    this.ulx = 0;
    this.uly = 0;
    this.rotated = false;
  }

  moveTo(x, y, doErase) {
    if (doErase) {
      this.erase();
    }
    this.ulx = x;
    this.uly = y;
    this.render();
    return this; // enable method chaining
  }

  render() {
    stroke(0);
    rect(this.ulx, this.uly, this.width, this.height);
    fill(128, 0, 128);
    circle(this.ulx + 30, this.uly + 20, 40);
  }

  erase() {
    stroke(this.backColor);
    fill(this.backColor);
    rect(this.ulx, this.uly, this.width, this.height);
  }
}
