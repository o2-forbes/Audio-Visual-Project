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
  let sunY = 230;
  let sunRadius = 175;
  
  // Draw sun with glow
  noStroke();
  fill(255,250,240); // Yellow colour for the sun
  ellipse(sunX, sunY, sunRadius * 2); // Draw sun

  //Layer 3

  //Draw Skyscraper
  fill(228,90,143);
  rect(775, 500, 50, 400);

  //Draw Skyscraper 2
  rect(620, 395, 45, 380);
  rect(590, 470, 30, 30);
  triangle(695, 410, 665, 410, 665, 395);
  rect(630, 365,3,30);
  rect(633, 383,3,8);
  rect(627, 370,3,8);

  //Draw Skyscraper 3

  //Layer 2

  //Draw Skyscraper
  fill(137,1,89); 
  rect(665, 410, 90, 560);
  rect(735, 500, 43, 500);
  rect(768, 510,15,15,4);
  rect(768, 550,15,15,4);
  rect(660, 440,15,15,4);
  rect(660, 490,15,15,4);
  rect(660, 540,15,15,4);
  rect(660, 590,15,15,4);
  rect(660, 640,15,15,4);
  rect(660, 690,15,15,4);
  rect(740, 380,3,30);
  rect(690, 375,3,35);
  rect(730, 395,3,25);
  rect(680, 390,3,30);
  rect(679, 390,5,9);
  rect(739, 385,5,9);
  rect(739, 400,5,9);

  //Draw Skyscraper 2
  rect(540, 560, 70, 300);
  rect(535, 570,15,15,4);
  rect(535, 605,15,15,4);

  //Draw Skyscraper 3
  rect(350, 480, 90, 300);
  rect(440, 540, 30, 240);
  rect(320, 540, 30, 240);
  rect(420, 450,3,35);
  rect(405, 440,2,40);
  rect(360, 450,2,30);
  rect(419, 455,5,9);
  rect(419, 470,5,9);
  rect(402, 468,3,9);
  rect(406, 455,3,9);
  rect(402, 442,3,9);
  ellipse(361, 450, 5, 5);
  triangle(440, 515, 440, 540, 470, 540); // Define the vertices of the triangle
  triangle(350, 515, 320, 540, 350, 780); // Define the vertices of the triangle
  fill(137,1,89);
  triangle(735, 430, 735, 500, 778, 500); // Define the vertices of the triangle
  rect(460, 570,15,15,4);
  rect(460, 610,15,15,4);
  rect(460, 650,15,15,4);
  rect(460, 690,15,15,4);

  //Draw Skyscraper 4
  rect(100, 480, 140, 400);
  rect(240, 505, 25, 400);
  triangle(240, 505, 265, 505, 240, 480);
  rect(110, 450, 30, 30);
  rect(128, 440, 12, 12);
  rect(140, 468, 95, 3);
  rect(232, 468, 3, 20);
  rect(222, 468, 3, 20);
  rect(212, 468, 3, 20);
  rect(202, 468, 3, 20);
  rect(192, 468, 3, 20);
  rect(182, 468, 3, 20);
  rect(172, 468, 3, 20);
  rect(162, 468, 3, 20);
  rect(152, 468, 3, 20);
  rect(142, 468, 3, 20);
  rect(255, 520,15,15,4);
  rect(95, 500,15,15,4);
  rect(95, 540,15,15,4);
  rect(95, 580,15,15,4);
  rect(95, 620,15,15,4);

  //Draw Skyscraper 5
  rect(0, 540, 50, 160);
  rect(0, 525, 15, 15);
  rect(25, 528, 5, 12);
  rect(26, 508, 3, 20);
  rect(40, 525, 3, 15);
  rect(40, 555,15,15,4);
  rect(40, 585,15,15,4);

  //Floor
  fill(137,1,89); 
  rect(300, 740, 600, 150);  

  //Layer 1

  //Draw Skyscraper
  fill(46,6,66); // colour for the skyscraper
  rect(750, 600, 50, 400); // Draw skyscraper
  rect(745, 640,20,20,4);
  rect(745, 700,20,20,4);
  rect(745, 760,20,20,4);
  rect(745, 820,20,20,4);
  rect(775, 580,40,20);
  rect(780, 550,4,30);
  rect(788, 530,5,50);

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
  //Rail 1
  rect(190, 610, 20, 3);
  rect(190, 610, 3, 18);
  rect(197, 610, 3, 18);
  rect(204, 610, 3, 18);
  rect(190, 620, 20, 8);
  //Rail 2
  rect(190, 690, 20, 3);
  rect(190, 690, 3, 18);
  rect(197, 690, 3, 18);
  rect(204, 690, 3, 18);
  rect(190, 700, 20, 8);
  //Rail 3
  rect(190, 770, 20, 3);
  rect(190, 770, 3, 18);
  rect(197, 770, 3, 18);
  rect(204, 770, 3, 18);
  rect(190, 780, 20, 8);
  // Add a triangle between the two rectangles
  fill(46, 6, 66); 
  triangle(210, 600, 260, 600, 260, 550); 

  //Draw Skyscraper 4
  fill(46,6,66); 
  rect(0, 630, 130, 270); 
  rect(125, 655, 10, 40, 4); 
  rect(125, 715, 10, 40, 4);
  rect(125, 775, 10, 40, 4);  
  rect(15, 610, 40, 30); 
  rect(105, 615, 12, 15); 
  // Draw an ellipse on top of the last rectangle
  ellipse(105 + 6, 620 - 7.5, 20); 

  //Floor
  fill(46,6,66); 
  rect(100, 835, 150, 65);  
  rect(300, 870, 600, 65);  
}