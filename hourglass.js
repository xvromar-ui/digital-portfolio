// Derived class, specializes Block
class HourGlass extends Block {
  constructor (width, height, backColor, patchColor1, patchColor2 ) {
    super(width, height, backColor);
    this.patchColor1= patchColor1;
    this.patchColor2= patchColor2;
  }
  
  // Can you overload in JS?
  render(x, y) {
    this.ulx = x;
    this.uly = y;
    render();
  }
  
  render() {
    let patchWide = this.width / 2;
    let patchHigh = this.height / 2;
    let midX = this.ulx + patchWide;
    let midY = this.uly + patchHigh;
    let p1Color = this.patchColor1;
    let p2Color = this.patchColor2;
    
    fill(p2Color);
    
    console.log(midX + "," + midY);
    triangle (midX, midY, this.ulx, this.uly + this.height, this.ulx, this.uly);
    
    triangle (midX, midY, this.ulx + this.width, this.uly, this.ulx + this.width, this.uly + this.height);
    
    fill(p1Color);
    triangle (midX, midY, this.ulx, this.uly, this.ulx + this.width, this.uly);
    
    triangle (midX, midY, this.ulx, this.uly + this.height, this.ulx + this.width, this.uly + this.height);
              
  }
}