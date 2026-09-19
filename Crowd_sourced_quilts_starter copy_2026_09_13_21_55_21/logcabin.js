class LogCabin extends Block {
  constructor (width, height, patchColor1, patchColor2, patchColor3, patchColor4, patchColor5, up) {
    super(width, height);
    this.patchColor1 = patchColor1;
    this.patchColor2 = patchColor2;
    this.patchColor3 = patchColor3;
    this.patchColor4 = patchColor4;
    this.patchColor5 = patchColor5;
    this.up = up;
    }
  
  render() {
    let x = this.ulx;
    let y = this.uly;
    
    let w = this.width;
    let h = this.height;
    
    if (this.up) {
    
      // center
      fill(this.patchColor4);
      rect(x, y + (h / 5) * 2, w, h / 5);

      // 3rd right bar
      fill(this.patchColor3);
      rect(x + (h / 5) * 3, y, w / 5, h);

      // 2nd bottom bar
      fill(this.patchColor3);
      rect(x, y + (h / 5) * 3, w, h / 5);

      // 2nd left bar
      fill(this.patchColor2);
      rect(x + (w / 5), y, w / 5, h);

      // 2nd top bar
      fill(this.patchColor2);
      rect(x, y + (h / 5), w, h / 5);

      // right bar
      fill(this.patchColor5);
      rect(x + (h / 5) * 4, y, w / 5, h);

      // bottom bar
      fill(this.patchColor5);
      rect(x, y + (h / 5) * 4, w, h / 5);

      // left bar
      fill(this.patchColor1);
      rect(x, y, w / 5, h);

      // top horizontal bar
      fill(this.patchColor1);
      rect(x, y, w, h / 5);
      
    } else {
      
      // center
      fill(this.patchColor4);
      rect(x, y + (h / 5) * 2, w, h / 5);

      // 3rd right bar
      fill(this.patchColor2);
      rect(x + (h / 5) * 3, y, w / 5, h);

      // 2nd bottom bar
      fill(this.patchColor2);
      rect(x, y + (h / 5) * 3, w, h / 5);

      // 2nd left bar
      fill(this.patchColor3);
      rect(x + (w / 5), y, w / 5, h);

      // 2nd top bar
      fill(this.patchColor3);
      rect(x, y + (h / 5), w, h / 5);

      // right bar
      fill(this.patchColor1);
      rect(x + (h / 5) * 4, y, w / 5, h);

      // bottom bar
      fill(this.patchColor1);
      rect(x, y + (h / 5) * 4, w, h / 5);

      // left bar
      fill(this.patchColor5);
      rect(x, y, w / 5, h);

      // top horizontal bar
      fill(this.patchColor5);
      rect(x, y, w, h / 5);
    }
    
  }

}