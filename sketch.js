function setup() {
  createCanvas(800, 900);

  // Define the gradient
  let gradient = drawingContext.createLinearGradient(0, 0, 0, height);

  // Add color stops
  gradient.addColorStop(0, 'rgb(250,128,114)'); // Orange at the top
  gradient.addColorStop(1, 'rgb(255, 255, 255)'); // White at the bottom
  
  // Apply gradient as a fill style
  drawingContext.fillStyle = gradient;
  
  // Draw a rectangle to fill with the gradient
  rect(0, 0, width, height);
  
  // Draw a large yellow circle in the center
  noStroke();
  // Draw multiple ellipses with decreasing opacity and increasing size
  for (let i = 0; i < 10; i++) {
    let alpha = map(i, 0, 9, 100, 0); // Decreasing opacity
    fill(255, 250, 205, alpha);
    ellipse(400, 225, 350 + i * 10); // Increasing size
  }

  fill(255,255,224);
  ellipse(400, 225, 350);
}
