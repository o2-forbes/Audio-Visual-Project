function setup() {
  createCanvas(800, 900);

  // Define the background gradient
  let backgroundGradient = drawingContext.createLinearGradient(0, 0, 0, height);
  backgroundGradient.addColorStop(0, 'rgb(255, 68, 51)'); // Red at the top
  backgroundGradient.addColorStop(1, 'rgb(255, 255, 255)'); // White at the bottom
  
  // Apply background gradient as a fill style
  drawingContext.fillStyle = backgroundGradient;
  rect(0, 0, width, height); // Draw background rectangle
  
}
