// Derive class, specializes Block
class FourPatch extends Block {
  constructor(width, height, backColor, patchColor1, patchColor2 ) {
    super( width, height, backColor) ;
    this.patchColor1 = patchColor1 ;
    this.patchColor2 = patchColor2 ;
  }

  // Can you overload in JS?
  render( x, y ) {
    this.ulx = x ;
    this.uly = y ;
    this.render( ) ;
  }
  
  render( ) {
    let patchWide = this.width / 2 ;
    let patchHigh = this.height / 2 ;
    let midX = this.ulx + patchWide;
    let midY = this.uly + patchHigh;
    let p1Color = this.patchColor1 ;
    let p2Color = this.patchColor2 ;
    
    console.log( midX + "," + midY) ;
    
    if( this.rotated ) {
      p1Color = this.patchColor2 ;
      p2Color = this.patchColor1 ;
    } 
    // Make a fat black line around each patch
    // (optional)
    strokeWeight( 1 ) ;
    stroke ( 0 ) ;
    fill( p1Color ) ;
    rect( this.ulx, this.uly, patchWide, patchHigh) ;
    rect( midX, midY, patchWide, patchHigh) ;
    fill( p2Color ) ;
    rect( this.ulx, midY, patchWide, patchHigh) ;
    rect( midX, this.uly, patchWide, patchHigh ) ;
  }
}