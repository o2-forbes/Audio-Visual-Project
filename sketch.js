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
  let sunY = 200;
  let sunRadius = 175;
  let glowRadius = sunRadius * 3;

  // Draw sun glow
  noStroke();
  let glowOpacity = 50; // Initial opacity
  let glowStep = 10; // Opacity decrement for each ellipse
  let glowSizeStep = 20; // Size increment for each ellipse

  for (let i = 0; i < 10; i++) { // Draw 10 ellipses for glow
    fill(255, 250, 240, glowOpacity);
    ellipse(sunX, sunY, glowRadius); // Draw ellipse
    glowOpacity -= glowStep; // Decrease opacity for next ellipse
    glowRadius += glowSizeStep; // Increase size for next ellipse
  }

  // Draw sun with glare
  strokeWeight(2);
  stroke(255,250,205);
  fill(255, 250, 240); // Yellow colour for the sun
  ellipse(sunX, sunY, sunRadius * 2); // Draw sun
  noStroke();

  // Add glare effect
  fill(255, 255, 200, 100); // Glare color with transparency
  ellipse(sunX + 50, sunY - 50, sunRadius * 0.8); // Glare ellipse 1
  ellipse(sunX - 30, sunY + 30, sunRadius * 0.5); // Glare ellipse 2
  ellipse(sunX + 70, sunY + 60, sunRadius * 0.6); // Glare ellipse 3

  //Layer 4

  //Draw Skyscraper
  fill(225,112,138);
  rect(780, 320, 50, 200);

  //Draw Skyscraper 2
  rect(660, 175, 40, 250);
  rect(700, 195, 20, 250);
  triangle(700, 175, 700, 195, 720, 195);
  rect(720, 285, 20, 200);
  rect(728, 275, 2, 10);
  rect(665, 150, 2, 25);
  rect(674, 170, 18, 5);

  //Draw Skyscraper 2
  rect(623, 285, 30, 200);

  //Draw Skyscraper 3
  rect(560, 350, 45, 250);
  rect(540, 375, 25, 250);
  triangle(560, 350, 515 + 45, 375, 540, 375);
  rect(590, 330, 3, 20);
  rect(575, 336, 3, 20);
  rect(568, 346, 7, 4);

  //Draw Skyscraper 4
  rect(460, 295, 35, 250);
  rect(480, 291, 12, 4);
  rect(465, 289, 2, 6);

  //Draw Skyscraper 5
  rect(410, 330, 30, 250);

  //Draw Skyscraper 6
  rect(300, 220, 40, 300);
  rect(340, 240, 20, 300);
  triangle(340, 240, 360, 240, 340, 220);
  rect(360, 300, 20, 300);
  triangle(360, 300, 380, 300, 360, 280); 
  rect(300, 200, 2, 20);
  rect(308, 210, 2, 12);

  //Draw Skyscraper 7
  ellipse(270, 295, 25, 22)
  rect(255, 295, 30, 500);

  //Draw Skyscraper 8
  rect(65, 230, 43, 500);
  rect(108, 330, 23, 500);
  rect(70, 210, 3, 22);
  rect(75, 188, 2, 42);
  rect(95, 222, 2, 22);

  //Draw Skyscraper 9

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
  rect(455, 435, 100, 380);
  rect(465, 415, 20, 20);
  rect(515, 431, 30, 4);
  rect(530, 428, 12, 3);
  rect(520, 419, 2, 12);

  //Draw Skyscraper 4
  rect(370, 350, 55, 380);
  ellipse(397.5, 360, 50, 45);
  rect(368, 360,6,6,4);
  rect(368, 370,6,6,4);
  rect(421, 360,6,6,4);
  rect(421, 370,6,6,4);
  rect(368, 400,6,6,4);
  rect(368, 410,6,6,4);
  rect(368, 440,6,6,4);
  rect(368, 450,6,6,4);
  rect(421, 400,6,6,4);
  rect(421, 410,6,6,4);
  rect(421, 440,6,6,4);
  rect(421, 450,6,6,4);

  //Draw Skyscraper 5
  rect(270, 410, 60, 380);
  rect(330, 430, 15, 380);
  triangle(330, 410, 330, 430, 345, 430);
  rect(315, 405, 5, 5);
  rect(305, 400, 3, 10);
  rect(288, 406, 10, 4);
  rect(274, 401, 10, 9);

  //Draw Skyscraper 6
  rect(165, 270, 75, 380);
  rect(150, 290, 15, 380);
  triangle(165, 270, 150, 290, 165, 290);
  rect(148, 310,6,12,4);
  rect(148, 350,6,12,4);
  rect(148, 390,6,12,4);
  rect(148, 430,6,12,4);
  rect(236, 430,6,12,4);
  rect(236, 390,6,12,4);
  rect(236, 350,6,12,4);
  rect(236, 310,6,12,4);
  rect(220, 230, 2, 40);
  rect(220, 230, 4, 10);
  rect(218, 260, 4, 10);
  rect(205, 250, 2, 20);
  rect(204, 265, 4, 6);
  rect(204, 250, 4, 6);

  //Draw Skyscraper 7
  rect(35, 400, 80, 380)
  rect(33, 410,6,8,4);
  rect(33, 420,6,8,4);
  rect(33, 430,6,8,4);
  rect(33, 440,6,8,4);
  rect(33, 450,6,8,4);
  rect(33, 460,6,8,4);
  rect(33, 470,6,8,4);
  rect(33, 480,6,8,4);
  rect(33, 490,6,8,4);
  rect(33, 500,6,8,4);
  rect(33, 510,6,8,4);
  rect(33, 520,6,8,4);
  rect(33, 530,6,8,4);;
  rect(111, 410,6,8,4);
  rect(111, 420,6,8,4);
  rect(111, 430,6,8,4);
  rect(111, 440,6,8,4);
  rect(100, 394, 6, 6);
  rect(45, 390, 20, 10);

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