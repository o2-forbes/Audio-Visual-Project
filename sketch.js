function setup() {
  createCanvas(800, 900);

  // Define the background gradient
  let backgroundGradient = drawingContext.createLinearGradient(0, 0, 0, height);
  backgroundGradient.addColorStop(0, 'rgb(220,95,131)'); // Red at the top
  backgroundGradient.addColorStop(1, 'rgb(255, 255, 255)'); // White at the bottom
  
  // Apply background gradient as a fill style
  drawingContext.fillStyle = backgroundGradient;
  rect(0, 0, width, height); // Draw background rectangle

  // Set up sun
  let sunX = width / 2;
  let sunY = 260;
  let sunRadius = 180;
  
  // Draw sun with glow
  noStroke();
  fill(254,254,254); // Yellow colour for the sun
  ellipse(sunX, sunY, sunRadius * 2); // Draw sun

  //Draw skyscraper
  //skyscraperWidth = 50;
  //skyscraperHeight = 400;
  //skyscraperX = 750;
  //skyscraperY = 600;
  
  fill(46,6,66); // colour for the skyscraper
  rect(750, 600, 50, 400); // Draw skyscraper
  rect(745, 640,20,20,4);
  rect(745, 700,20,20,4);
  rect(745, 760,20,20,4);
  rect(745, 820,20,20,4);
  rect(775, 580,40,20);
  rect(780, 520,5,60);
  rect(788, 500,8,80);

  //Draw Skyscraper 2
  fill(46,6,66); 
  rect(580, 500, 70, 500); 
  rect(500, 625, 80, 300); 
  rect(635, 760,20,20,4);
  rect(635, 820,20,20,4);
  rect(635, 700,20,20,4);
  rect(635, 640,20,20,4);
  rect(635, 580,20,20,4);
  rect(635, 520,20,20,4);
  rect(575, 580,20,20,4);
  rect(575, 520,20,20,4);
  rect(495, 760,20,20,4);
  rect(495, 820,20,20,4);fill(46,6,66);
  rect(495, 700,20,20,4);
  rect(495, 640,20,20,4);
  rect(635, 580,20,20,4);
  rect(635, 520,20,20,4);

  //Draw Skyscraper 3
  fill(46,6,66); 
  rect(260, 550, 160, 350);  
  rect(210, 600, 50, 320); 
  rect(350, 520, 50, 30); 
  rect(275, 540, 25, 20);
  rect(315, 510, 5, 40);
  rect(325, 520, 4, 30);
  //Rail 1
  rect(415, 610, 20, 3);
  rect(435, 610, 3, 18);
  rect(423, 610, 3, 18);
  rect(429, 610, 3, 18);
  rect(415, 620, 20, 8);
  //Rail 2
  rect(415, 690, 20, 3);
  rect(435, 690, 3, 18);
  rect(423, 690, 3, 18);
  rect(429, 690, 3, 18);
  rect(415, 700, 20, 8);
  //Rail 3
  rect(415, 770, 20, 3);
  rect(435, 770, 3, 18);
  rect(423, 770, 3, 18);
  rect(429, 770, 3, 18);
  rect(415, 780, 20, 8);
  // Add a triangle between the two rectangles
  fill(46, 6, 66); 
  triangle(210, 600, 260, 600, 260, 550); 

  //Draw Skyscraper 4
  fill(46,6,66); 
  rect(0, 630, 130, 270); 
}