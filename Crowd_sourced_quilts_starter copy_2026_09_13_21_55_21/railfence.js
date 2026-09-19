class RailFence extends Block {
  constructor (width, height, backColor, patchColor1, patchColor2, patchColor3, patchColor4, isVertical) {
    super(width, height, backColor);
    this.patchColor1 = patchColor1;
    this.patchColor2 = patchColor2;
    this.patchColor3 = patchColor3;
    this.patchColor4 = patchColor4;
    this.isVertical = isVertical;
  }
  
  render(){
    let x = this.ulx;
    let y = this.uly;

    if(this.isVertical){
      let w = this.width / 4;
      let h = this.height;

      // vertical bars
      fill(this.patchColor4);
      rect(x, y, w, h);

      fill(this.patchColor1);
      rect(x + w, y, w, h);

      fill(this.patchColor2);
      rect(x + (2 * w), y, w, h);

      fill(this.patchColor3);
      rect(x + (3 * w), y, w, h);

    } else {
      let w = this.width;
      let h = this.height / 4;

      fill(this.patchColor3);
      rect(x, y, w, h);

      fill(this.patchColor2);
      rect(x, y + h, w, h);

      fill(this.patchColor1);
      rect(x, y + (2 * h), w, h);

      fill(this.patchColor4);
      rect(x, y + (3 * h), w, h);
    }
  } 
}