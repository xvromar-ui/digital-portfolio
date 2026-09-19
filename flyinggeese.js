class FlyingGeese extends Block {
  constructor(width, height, backColor, patchColor1, isLeft) {
    super(width, height, backColor);
    this.patchColor1 = patchColor1;
    this.isLeft = isLeft;
  }
  
  render() {
    let x = this.ulx;
    let y = this.uly;

    fill(this.backColor);
    rect(x, y, this.width, this.height);

    fill(this.patchColor1);
    
    if (this.isLeft) {
      triangle(x, y + this.height, x + this.width, y, x + this.width, y + this.height);
    }  else {
      triangle(x, y + this.height, x, y, x + this.width, y + this.height);
    }
  }
}