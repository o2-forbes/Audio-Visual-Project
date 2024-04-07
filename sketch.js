function setup() {
  createCanvas(800, 600);
  // Define the gradient
  let gradient = drawingContext.createLinearGradient(0, 0, 0, height);
  // Add colour stops
  gradient.addColorStop(0, '#FFA500'); // Orange at the top
  gradient.addColorStop(1, '#FFFFFF'); // White at the bottom
  // Apply gradient as a fill style
  drawingContext.fillStyle = gradient;
  // Draw a rectangle to fill with the gradient
  rect(0, 0, width, height);
}
