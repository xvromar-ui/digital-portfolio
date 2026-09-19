// Holds 2d array of Blocks
class Quilt {
  constructor(nCols, nRows, blockSize, backColor ) {
    this.nCols = nCols ;
    this.nRows = nRows ;
    this.blockSize = blockSize ;
    this.backColor = backColor ;
    this.blocks = new Array(nRows);

    for (var i = 0; i < this.blocks.length; i++) {
      this.blocks[i] = new Array(nCols);
    }

    console.log(this.blocks);

  }

  // Add a block to the quilt at row and column
  addBlock( block, row, col ) {
    if( row < this.nRows && col < this.nCols ) {
      this.blocks[row][col] = block ;
    }
  }
  
  // Draw the quilt
  render() {
    let ulx = 1 ;
    let uly = 1 ;
    for( let row = 0 ; row < this.nRows ; row++ ) {
      for( let col = 0 ; col < this.nCols ; col++ ) {
        if( this.blocks[row][col] ) {
          this.blocks[row][col].moveTo( ulx, uly, 0 ) ;
        }
        // uncomment the next two lines to get
        // a marker at the lower right corner
        // of each block
        // fill( 255, 0, 0 ) ;
        // circle( ulx + 100, uly + 100, 20) ;
        ulx = ulx + this.blockSize ;
      } // end col loop
      ulx = 0 ;
      uly = uly + this.blockSize ;
    } // end row loop
  } // end render method
}
