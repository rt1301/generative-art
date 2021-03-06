// Padding around the canvas.
var padding = 35

// Number of squares per row/column
var row = 8

// Size of grid cells (cellSize x cellSize).
var cellSize = 80
var gridSize = (cellSize * row) + (padding * 2)

// Probability of drawing an inner rectangle.
var chance = 0.6

// Gap between squares
var gap = 10

// Extent the square can shift from center
var shiftLimit = 1

var shades = ['#FEDC97', '#B5B682', '#28666E', '#7C9885', '#bfb9ba', '#0059b2', '#197fe5']

function setup() {
  createCanvas(gridSize, gridSize)
  rectMode(CORNER)
  angleMode(DEGREES)
  strokeWeight(4)
  noLoop()
  frameRate(2)
}

function draw() {
  background(shades[2])
  for (var y = padding; y < height - 2 * padding; y += cellSize) {
    for (var x = padding; x < width - 2 * padding; x += cellSize) {
      drawCell(x + cellSize/2, y + cellSize/2)
    }
  }
}

function drawCell(x, y) {
  push()
  translate(x, y)
  fill(shades[2])
  noStroke()
  rectMode(CENTER)
  rect(0, 0, cellSize, cellSize)
  stroke(shades[0])
  rectMode(CORNER)
  if (random() > 0.5) {
    // side 1
    arc(-cellSize/2, -cellSize/2, cellSize*1.8, cellSize*1.8, 0, 90)
    arc(-cellSize/2, -cellSize/2, cellSize*1.4, cellSize*1.4, 0, 90)
    arc(-cellSize/2, -cellSize/2, cellSize, cellSize, 0, 90)
    arc(-cellSize/2, -cellSize/2, cellSize*0.6, cellSize*0.6, 0, 90)
    arc(-cellSize/2, -cellSize/2, cellSize*0.2, cellSize*0.2, 0, 90)
    
    /*line(-cellSize/2, -cellSize/2, 0, 0)
    rect(-cellSize/2, -cellSize/2, )
    rect(-cellSize/2, -cellSize/2, )
    rect(-cellSize/2, -cellSize/2, )
    rect(-cellSize/2, -cellSize/2, )*/
    // side 3
    arc(cellSize/2, cellSize/2, cellSize*1.8, cellSize*1.8, 180, 270)
    arc(cellSize/2, cellSize/2, cellSize*1.4, cellSize*1.4, 180, 270)
    arc(cellSize/2, cellSize/2, cellSize, cellSize, 180, 270)
    arc(cellSize/2, cellSize/2, cellSize*0.6, cellSize*0.6, 180, 270)
    arc(cellSize/2, cellSize/2, cellSize*0.2, cellSize*0.2, 180, 270)
  } else {
    // side 2
    arc(cellSize/2, -cellSize/2, cellSize*1.8, cellSize*1.8, 90, 180)
    arc(cellSize/2, -cellSize/2, cellSize*1.4, cellSize*1.4, 90, 180)
    arc(cellSize/2, -cellSize/2, cellSize, cellSize, 90, 180)
    arc(cellSize/2, -cellSize/2, cellSize*0.6, cellSize*0.6, 90, 180)
    arc(cellSize/2, -cellSize/2, cellSize*0.2, cellSize*0.2, 90, 180)
    // side 4
    arc(-cellSize/2, cellSize/2, cellSize*1.8, cellSize*1.8, 270, 0)
    arc(-cellSize/2, cellSize/2, cellSize*1.4, cellSize*1.4, 270, 0)
    arc(-cellSize/2, cellSize/2, cellSize, cellSize, 270, 0)
    arc(-cellSize/2, cellSize/2, cellSize*0.6, cellSize*0.6, 270, 0)
    arc(-cellSize/2, cellSize/2, cellSize*0.2, cellSize*0.2, 270, 0)
  }
  pop()
}