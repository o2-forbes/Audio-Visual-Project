let petals = []; // Array function that holds cherry blossom petals
let clouds = []; // Array function that holds clouds
let cloudx = 100; // Declare a variable 'cloudx' and initialise it with a value of 100
let cloudy = 100; // Declare a variable 'cloudy' and initialise it with a value of 100
let on = true; // Initialise a variable called 'on' and set it to true
var drop = []; // Array function that holds drops
var stars = []; // Array function that holds stars
var song1; // Declare a variable named 'song' to be used for storing a reference to a sound file
// var song2; // Declare a variable named 'song' to be used for storing a reference to a sound file
var sliderVolume; // Declare a variable named 'sliderVolume'
var sliderRate; // Declare a variable named 'sliderRate'
var sliderPan; // Declare a variable named 'sliderPan'
var button; // Declare a variable named 'button'

// Define a function named loaded
function loaded() {
  // Log a message to the console indicating that the function has been called
  console.log("loaded");
}

// Preload function to load the sound file before the sketch starts
function preload() {
  // Load the sound files and assign it to the appropriate 'song' variable
  song1 = loadSound("Arukas Bloom Royalty Free 8 Bit Lofi Hip Hop.mp3");
  // song2 = loadSound("Rainy Village Royalty Free 8 Bit Lofi Hip Hop.mp3");

  // Create a button element with the label "play"
  button = createButton("play");

  // Call the togglePlaying function when the button is pressed
  button.mousePressed(togglePlaying);
}

// Define a function named togglePlaying
function togglePlaying() {
  // Check if song1 is not currently playing
  if (!song1.isPlaying()) {
    // Start playing song1 in a loop (repeating playback)
    song1.loop();
    // Change the label of the button to "stop"
    button.html("stop");
  } else {
    // If song1 is currently playing, pause it
    song1.pause();
    // Change the label of the button to "play"
    button.html("play");
  }
}

function setup() {
  // Create a canvas with width 800 pixels and height 900 pixels
  createCanvas(800, 900);

  // Create a slider element to control the volume with the following parameters:
  // - Minimum value: 0
  // - Maximum value: 1
  // - Initial value: 0.5
  // - Step size: 0.01
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  // Set the position of the sliderVolume element to (900, 75) on the canvas
  sliderVolume.position(915, 75);

  // Create a slider element to control the playback rate with the following parameters:
  // - Minimum value: 0
  // - Maximum value: 2
  // - Initial value: 1
  // - Step size: 0.01
  sliderRate = createSlider(0, 2, 1, 0.01);
  // Set the position of the sliderRate element to (600, 75) on the canvas
  sliderRate.position(615, 75);

  // Create a slider element to control the panning with the following parameters:
  // - Minimum value: -1
  // - Maximum value: 1
  // - Initial value: 0.5
  // - Step size: 0.01
  sliderPan = createSlider(-1, 1, 0, 0.01);
  // Set the position of the sliderPan element to (1200, 75) on the canvas
  sliderPan.position(1215, 75);

  // Stars
  for (var s = 0; s < 1000; s++) {
    // Loop 1000 times to create 1000 star objects

    // Create a new star object and add it to the stars array
    stars[s] = new Star();
  }

  // Clouds
  for (let n = 0; n < 4; n = n + 1) {
    // Loop runs four times, creating four cloud objects

    // Create a new Cloud object and assign it to the nth index of the clouds array
    clouds[n] = new Cloud();
  }

  // Rain
  for (var i = 0; i < 200; i++) {
    // Loop to create 200 raindrops

    // Create a new instance of the Drop class and store it in the drop array at index i
    drop[i] = new Drop();
  }
}

// Define a function called mousePressed()
function mousePressed() {
  // Check if the variable 'on' is true
  if (on) {
    // If 'on' is true, set it to false
    on = false;
  } else {
    // If 'on' is false, set it to true
    on = true;
  }
}

function Cloud() {
  // The constructor function for creating Cloud objects

  // Initialize the x-coordinate of the cloud to a random value between 0 and the width of the canvas
  this.x = random(0, width);

  // Initialize the y-coordinate of the cloud to a random value between 20 and 400
  this.y = random(20, 400);

  // Display method to draw the cloud on the canvas
  this.display = function () {
    // Set stroke colour to white
    stroke(255);

    // Set stroke weight to 1
    strokeWeight(1);

    // Set fill colour to white
    fill(255);

    // Draw multiple rectangles with curved edges to represent the cloud
    rect(this.x - 10, this.y, 80, 20, 10);
    rect(this.x, this.y + 25, 80, 20, 10);
    rect(this.x + 30, this.y + 10, 80, 20, 10);
    rect(this.x + 10, this.y - 10, 80, 20, 10);

    // Disable stroke for subsequent shapes
    noStroke();
  };

  // Move method to update the cloud's position
  this.move = function () {
    // Increment the x-coordinate of the cloud by 0.5 units
    this.x += 0.25;

    // Update the y-coordinate of the cloud by adding a small random value
    this.y += random(-0.25, 0.25);

    // If the cloud moves beyond the width of the canvas, reset its x-coordinate to 0
    if (this.x >= width) {
      this.x = 0;
    }
  };
}

function makeCloud(cloudx, cloudy) {
  // Set fill colour to a light shade (RGB 250,250,250)
  fill(246, 246, 246);
  // Turn off stroke (no outline)
  noStroke();
  // Draw ellipses to create the cloud shape
  ellipse(cloudx, cloudy, 70, 50); // Main ellipse
  ellipse(cloudx + 10, cloudy + 10, 70, 50); // Ellipse slightly shifted to the right and down
  ellipse(cloudx - 20, cloudy + 10, 70, 50); // Ellipse slightly shifted to the left and down
}

function draw() {
  // Set the volume of song1 to the current value of a slider element named 'sliderVolume'
  song1.setVolume(sliderVolume.value());

  // Set the panning (stereo position) of song1 to the current value of a slider element named 'sliderPan'
  song1.pan(sliderPan.value());

  // Set the playback rate (speed) of song1 to the current value of a slider element named 'sliderRate'
  song1.rate(sliderRate.value());

  if (on) {
    // Define the background gradient
    let backgroundGradient = drawingContext.createLinearGradient(
      0,
      0,
      0,
      height
    );
    backgroundGradient.addColorStop(0, "rgb(220,95,131)"); // Red at the top
    backgroundGradient.addColorStop(1, "rgb(255, 255, 255)"); // White at the bottom

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

    for (let i = 0; i < 10; i++) {
      // Draw 10 ellipses for glow
      fill(255, 250, 240, glowOpacity);
      ellipse(sunX, sunY, glowRadius); // Draw ellipse
      glowOpacity -= glowStep; // Decrease opacity for next ellipse
      glowRadius += glowSizeStep; // Increase size for next ellipse
    }

    // Draw sun with glare
    strokeWeight(2);
    stroke(255, 250, 205);
    fill(255, 250, 240); // Yellow colour for the sun
    ellipse(sunX, sunY, sunRadius * 2); // Draw sun
    noStroke();

    // Add glare effect
    fill(255, 255, 200, 100); // Glare colour with transparency
    ellipse(sunX + 50, sunY - 50, sunRadius * 0.8); // Glare ellipse 1
    ellipse(sunX - 30, sunY + 30, sunRadius * 0.5); // Glare ellipse 2
    ellipse(sunX + 70, sunY + 60, sunRadius * 0.6); // Glare ellipse 3

    // Layer 1
    fill(220, 108, 134); // Set colour for all layer 1 assets

    // Draw Skyscraper
    rect(780, 320, 50, 200); // Draw the skyscraper

    // Draw Skyscraper 1
    // Draw the main rectangular building
    rect(660, 175, 40, 250);
    // Draw the top part of the building
    rect(700, 195, 20, 250);
    triangle(700, 175, 700, 195, 720, 195);
    rect(720, 285, 20, 200);
    // Draw additional details
    rect(728, 275, 2, 10); // Detail on the top part
    rect(665, 150, 2, 25); // Detail on the left side
    rect(674, 170, 18, 5); // Detail on the left side

    // Draw Tokyo Skytree
    fill(222, 49, 99); // Set fill colour
    quad(485, 350, 505, 350, 510, 440, 480, 440); // Draw the main structure
    quad(470, 325, 520, 325, 515, 350, 475, 350); // Draw the top part
    stroke(222, 49, 99); // Set stroke coluor
    strokeWeight(5); // Set stroke weight
    line(476, 340, 450, 600); // Draw the left support
    line(514, 340, 535, 600); // Draw the right support
    noStroke(); // Reset stroke
    rect(467, 318, 55, 7, 10); // Draw the horizontal line at the top
    rect(481, 273, 28, 45); // Draw the first horizontal rectangle
    rect(467, 266, 55, 7, 10); // Draw the second horizontal line
    rect(473, 259, 43, 7); // Draw the third horizontal line
    rect(482, 225, 25, 35, 3); // Draw the first rectangle in the middle
    rect(490, 201, 10, 25, 3); // Draw the second rectangle in the middle
    rect(486, 107, 18, 95, 3); // Draw the bottom rectangle
    rect(482, 98, 26, 10, 3); // Draw the bottom line
    quad(482, 98, 508, 98, 512, 90, 478, 90); // Draw the bottom arc

    // Draw Skyscraper 3
    fill(225, 112, 138); // Set colour
    // Draw the main rectangular building
    rect(560, 350, 45, 250);
    // Draw additional structure
    rect(540, 375, 25, 250); // Additional structure on the left
    triangle(560, 350, 515 + 45, 375, 540, 375); // Roof triangle

    // Draw decorative elements
    rect(590, 330, 3, 20); // Decorative element 1
    rect(575, 336, 3, 20); // Decorative element 2
    rect(568, 346, 7, 4); // Decorative element 3

    // Draw Skyscraper 4
    // Draw the main rectangular building
    rect(615, 295, 35, 250);
    // Draw decorative elements
    rect(633, 291, 12, 4); // Decorative element 1
    rect(620, 289, 2, 6); // Decorative element 2

    // Draw Skyscraper 5
    // Draw a rectangular skyscraper
    rect(410, 330, 30, 250);

    // Draw Skyscraper 6
    // Draw the first section of the skyscraper
    rect(300, 220, 40, 300);
    // Draw the second section of the skyscraper
    rect(340, 240, 20, 300);
    // Draw the triangular roof for the second section
    triangle(340, 240, 360, 240, 340, 220);
    // Draw the third section of the skyscraper
    rect(360, 300, 20, 300);
    // Draw the triangular roof for the third section
    triangle(360, 300, 380, 300, 360, 280);
    // Draw additional details on the building
    rect(300, 200, 2, 20); // Detail 1
    rect(308, 210, 2, 12); // Detail 2

    // Draw Skyscraper 7
    // Draw circular top
    ellipse(270, 295, 25, 22);
    // Draw rectangular base
    rect(255, 295, 30, 500);

    // Draw Skyscraper 8
    // Draw the first section of the skyscraper
    rect(65, 230, 43, 500);
    // Draw the second section of the skyscraper
    rect(108, 330, 23, 500);
    // Draw details on the side of the building
    rect(70, 210, 3, 22); // Detail 1
    rect(75, 188, 2, 42); // Detail 2
    rect(95, 222, 2, 22); // Detail 3

    // Draw Skyscraper 9
    // Draw circular top
    ellipse(5, 275, 35, 30);
    // Draw rectangular base
    rect(0, 275, 50, 500);
    // Draw detail on the side of the building
    rect(40, 260, 2, 22);

    // Clouds
    for (let n = 0; n < clouds.length; n = n + 1) {
      // Loop through each cloud object in the array

      // Move the cloud according to its move() method
      clouds[n].move();

      // Display the cloud using its display() method
      clouds[n].display();
    }

    // Draw a cloud slightly above the original position
    makeCloud(cloudx, cloudy - 50);

    // Draw a cloud shifted to the right and downwards from the original position
    makeCloud(cloudx + 100, cloudy + 100);

    // Draw a cloud at a position shifted to the left and downwards from the original position
    makeCloud(cloudx - 50, cloudy + 250);

    // Increment the horizontal position of the clouds by 0.1 units
    cloudx += 0.1;

    // Layer 2
    fill(214, 80, 131); // Set colour for all layer 2 assets

    // Details

    // Box
    // Draw the top layer of the box
    rect(465, 428, 35, 7); // Draw the top rectangle

    // Draw the middle layer of the box
    rect(470, 421, 25, 7); // Draw the middle rectangle

    // Draw the bottom layer of the box
    rect(475, 414, 15, 7); // Draw the bottom rectangle

    // Cables
    // Draw horizontal cable segments
    rect(590, 430, 55, 5);
    rect(590, 438, 55, 3);
    rect(590, 446, 55, 3);

    // Draw vertical cable segments
    rect(590, 430, 5, 55);

    // Draw cable connectors
    rect(599, 447, 3, 23);
    rect(607, 447, 3, 23);
    rect(615, 447, 3, 23);

    // Cables
    // Draw vertical cable segments
    rect(240, 460, 40, 3);
    rect(240, 445, 40, 3);
    rect(240, 410, 40, 3);
    rect(240, 425, 40, 3);
    rect(240, 480, 40, 3);
    rect(240, 495, 40, 3);

    // Draw cable connectors
    rect(245, 480, 3, 18);
    rect(250, 480, 3, 18);
    rect(255, 480, 3, 18);
    rect(260, 480, 3, 18);
    rect(265, 480, 3, 18);
    rect(265, 445, 3, 18);
    rect(260, 445, 3, 18);
    rect(255, 445, 3, 18);
    rect(250, 445, 3, 18);
    rect(245, 445, 3, 18);
    rect(240, 445, 3, 18);
    rect(265, 410, 3, 18);
    rect(260, 410, 3, 18);
    rect(255, 410, 3, 18);
    rect(250, 410, 3, 18);
    rect(245, 410, 3, 18);
    rect(240, 410, 3, 18);

    // Ladder
    rect(141, 300, 3, 200); // Draw the main vertical bar of the ladder
    noFill(); // No fill for subsequent shapes
    stroke(228, 90, 143); // Set stroke colour to a shade of pink
    strokeWeight(3); // Set stroke weight to 3 pixels
    line(143, 300, 165, 272); // Draw diagonal support line for the ladder
    fill(214, 80, 131); // Set fill colour to the same shade of pink
    noStroke(); // No stroke for subsequent shapes
    // Draw ladder steps
    rect(141, 314, 10, 3);
    rect(141, 330, 10, 3);
    rect(141, 346, 10, 3);
    rect(141, 362, 10, 3);
    rect(141, 378, 10, 3);
    rect(141, 394, 10, 3);
    rect(141, 410, 10, 3);
    rect(141, 426, 10, 3);
    rect(141, 442, 10, 3);
    rect(141, 458, 10, 3);
    rect(141, 474, 10, 3);

    // Outlet
    // Draw outlet bars
    rect(77, 387, 3, 30); // Draw first outlet bar
    rect(85, 375, 3, 15); // Draw second outlet bar
    rect(77, 387, 8, 3); // Draw third outlet bar
    rect(90, 360, 3, 40); // Draw fourth outlet bar

    // Draw Skyscraper
    rect(775, 500, 50, 400); // Draw main body of the skyscraper

    // Draw Skyscraper 2
    rect(620, 395, 45, 380); // Draw main body of the skyscraper

    // Draw additional details
    rect(590, 470, 30, 30);
    triangle(695, 410, 665, 410, 665, 395);
    rect(630, 365, 3, 30);
    rect(633, 383, 3, 8);
    rect(627, 370, 3, 8);

    // Draw Skyscraper 3
    rect(455, 435, 100, 380); // Draw main body of the skyscraper

    // Draw additional details
    rect(515, 431, 30, 4);
    rect(530, 428, 12, 3);
    rect(525, 419, 2, 12);

    // Draw Skyscraper 4
    rect(370, 350, 55, 380); // Draw main body of the skyscraper
    ellipse(397.5, 360, 50, 45); // Draw rounded top of the skyscraper

    // Draw details on the sides
    rect(368, 360, 6, 6, 4); // Draw detail on the left side
    rect(368, 370, 6, 6, 4); // Draw detail on the left side
    rect(421, 360, 6, 6, 4); // Draw detail on the right side
    rect(421, 370, 6, 6, 4); // Draw detail on the right side
    rect(368, 400, 6, 6, 4); // Draw detail on the left side
    rect(368, 410, 6, 6, 4); // Draw detail on the left side
    rect(368, 440, 6, 6, 4); // Draw detail on the left side
    rect(368, 450, 6, 6, 4); // Draw detail on the left side
    rect(421, 400, 6, 6, 4); // Draw detail on the right side
    rect(421, 410, 6, 6, 4); // Draw detail on the right side
    rect(421, 440, 6, 6, 4); // Draw detail on the right side
    rect(421, 450, 6, 6, 4); // Draw detail on the right side

    // Draw Skyscraper 5
    rect(270, 410, 60, 380); // Draw main body of the skyscraper
    rect(330, 430, 15, 380); // Draw right side details
    triangle(330, 410, 330, 430, 345, 430);

    // Draw additional details
    rect(315, 405, 5, 5);
    rect(305, 400, 3, 10);
    rect(288, 406, 10, 4);
    rect(274, 401, 10, 9);

    // Draw Skyscraper 6
    rect(165, 270, 75, 380); // Draw main body of the skyscraper
    rect(150, 290, 15, 380); // Draw left side detail
    triangle(165, 270, 150, 290, 165, 290); // Draw left side detail

    // Draw right side details
    rect(236, 430, 6, 12, 4); // Draw each right side detail
    rect(236, 390, 6, 12, 4);
    rect(236, 350, 6, 12, 4);
    rect(236, 310, 6, 12, 4);
    rect(220, 230, 2, 40); // Draw additional details
    rect(220, 230, 4, 10);
    rect(218, 260, 4, 10);
    rect(205, 250, 2, 20);
    rect(204, 265, 4, 6);
    rect(204, 250, 4, 6);

    // Draw Skyscraper 7
    rect(35, 400, 80, 380); // Draw main body of the skyscraper

    // Draw left side details
    for (let y = 410; y <= 530; y += 10) {
      rect(33, y, 6, 8, 4); // Draw each left side detail
    }

    // Draw right side details
    for (let y = 410; y <= 440; y += 10) {
      rect(111, y, 6, 8, 4); // Draw each right side detail
    }
    // Draw additional details
    rect(100, 394, 6, 6); // Draw additional detail
    rect(45, 390, 20, 10); // Draw additional detail

    // Layer 2 - Train Tracks

    // Details

    // Train Tracks
    fill(224, 17, 95); // Set colour for the train tracks

    // Draw main track
    rect(0, 525, width, 15); // Draw main track

    // Draw crossbars
    for (let i = 0; i <= 800; i += 10) {
      rect(i, 519, 3, 6); // Draw each crossbar
    }

    // Train Stands
    // Draw vertical stands
    rect(90, 519, 6, 200);
    rect(60, 519, 6, 200);
    rect(270, 519, 6, 200);
    rect(300, 519, 6, 200);
    rect(480, 519, 6, 300);
    rect(510, 519, 6, 300);
    rect(540, 519, 6, 300);
    rect(570, 519, 6, 300);
    rect(655, 519, 6, 300);
    rect(785, 519, 6, 300);
    // Draw horizontal stands
    rect(0, 560, 800, 6);
    rect(0, 590, 800, 6);
    rect(0, 620, 800, 6);
    rect(0, 650, 800, 6);
    rect(0, 680, 800, 6);
    rect(0, 710, 800, 6);

    // Train

    // Roof
    // fill(216, 191, 216); // Fill colour for the roof
    // rect(255, 95, 30, 8, 4); // Draw rectangles for the roof of the first carriage
    // rect(200, 95, 30, 8, 4);
    // rect(365, 95, 30, 8, 4); // Draw rectangles for the roof of the second carriage
    // rect(305, 95, 30, 8, 4);

    // Carriages
    // fill(218, 112, 214); // Fill colour for the carriages
    // rect(300, 100, 100, 40, 3); // Draw the first carriage
    // rect(194, 100, 100, 40, 3); // Draw the second carriage

    // Connection
    // fill(216, 191, 216); // Fill colour for the connection
    // rect(294, 105, 6, 30); // Draw the connection between the carriages

    // Layer 3
    fill(137, 1, 89); // Set colour for all layer 3 assets

    // Tank

    // Draw tank body
    rect(65, 570, 23, 23, 5); // Draw tank body

    // Draw tank pipes
    rect(80, 575, 100, 3, 5); // Draw top pipe
    rect(80, 585, 100, 3, 5); // Draw bottom pipe
    rect(40, 575, 100, 3, 5); // Draw top pipe
    rect(40, 585, 100, 3, 5); // Draw bottom pipe

    // Billboard
    // Draw billboard
    rect(680, 400, 3, 30); // Draw left stand of the billboard
    rect(710, 400, 3, 30); // Draw right stand of the billboard
    rect(673, 377, 45, 23, 5); // Draw main billboard area

    // Outlet
    // Draw outlet bars
    rect(750, 415, 20, 5);
    rect(750, 425, 24, 5);
    rect(750, 435, 16, 5);
    rect(750, 445, 21, 5);
    rect(750, 455, 17, 5);
    rect(440, 495, 10, 15); // Draw outlet base
    rect(450, 495, 6, 25); // Draw outlet pipe

    // Ruins
    // Draw ruins structures
    rect(385, 440, 3, 40); // Draw vertical details
    rect(395, 425, 3, 60);
    rect(385, 445, 10, 3); // Draw horizontal details
    rect(385, 455, 10, 3);
    rect(385, 465, 10, 3);
    rect(385, 475, 10, 3);

    // Ladder
    // Draw ladder steps
    for (let y = 440; y <= 710; y += 10) {
      rect(657, y, 15, 4, 5); // Draw each step of the ladder
    }
    // Draw ladder sides
    rect(655, 440, 3, 274, 5); // Draw the sides of the ladder

    // Pipes
    // Draw pipe segments
    rect(486, 575, 3, 92, 5); // Draw vertical segment
    rect(481, 679, 3, 30, 5); // Draw vertical segment
    rect(465, 575, 22, 3, 5); // Draw horizontal segment
    rect(468, 630, 20, 3, 5); // Draw horizontal segment
    rect(476, 679, 13, 3, 5); // Draw horizontal segment
    rect(476, 708, 13, 3, 5); // Draw horizontal segment
    rect(486, 727, 15, 3, 5); // Draw horizontal segment
    rect(486, 708, 3, 20, 5); // Draw vertical segment
    rect(476, 708, 3, 35, 5); // Draw vertical segment
    rect(486, 666, 15, 3, 5); // Draw horizontal segment
    rect(486, 668, 3, 13, 5); // Draw vertical segment
    rect(468, 595, 10, 3, 5); // Draw horizontal segment
    rect(476, 595, 3, 85, 5); // Draw vertical segment

    // Draw Skyscraper
    rect(665, 410, 90, 560); // Draw main body of the skyscraper
    rect(735, 500, 43, 500); // Draw right side structure
    rect(768, 510, 15, 15, 4); // Draw top right structure
    rect(768, 550, 15, 15, 4); // Draw bottom right structure
    rect(740, 380, 3, 30); // Draw right side detail
    rect(560, 525, 3, 35); // Draw left side detail
    rect(730, 395, 3, 25); // Draw right side detail
    rect(550, 545, 3, 30); // Draw left side detail
    rect(549, 536, 5, 9); // Draw top left detail
    rect(739, 385, 5, 9); // Draw bottom left detail
    rect(739, 400, 5, 9); // Draw bottom left detail

    // Draw Skyscraper 2
    rect(540, 560, 70, 300); // Draw main body of the skyscraper
    rect(535, 570, 15, 15, 4); // Draw top left structure
    rect(535, 605, 15, 15, 4); // Draw bottom left structure

    // Draw Skyscraper 3
    rect(350, 480, 90, 300); // Draw main body of the skyscraper
    rect(440, 540, 30, 240); // Draw right side structure
    rect(320, 540, 30, 240); // Draw left side structure
    rect(425, 440, 2, 40); // Draw right detail
    rect(360, 450, 2, 30); // Draw left detail
    rect(422, 468, 3, 9); // Draw top right detail
    rect(426, 455, 3, 9); // Draw middle right detail
    rect(422, 442, 3, 9); // Draw bottom right detail
    ellipse(361, 450, 5, 5); // Draw window detail
    triangle(440, 515, 440, 540, 470, 540); // Draw top right structure
    triangle(350, 515, 320, 540, 350, 780); // Draw top left structure
    fill(137, 1, 89); // Set fill color to a shade of purple
    triangle(735, 430, 735, 500, 778, 500); // Draw additional structure

    // Draw Skyscraper 4
    rect(100, 480, 140, 400); // Draw main body of the skyscraper
    rect(240, 505, 25, 400); // Draw right side structure
    triangle(240, 505, 265, 505, 240, 480); // Draw top structure
    rect(110, 450, 30, 30); // Draw left side structure
    rect(128, 440, 12, 12); // Draw detail
    rect(140, 468, 95, 3); // Draw horizontal detail
    rect(232, 468, 3, 20); // Draw vertical details
    rect(222, 468, 3, 20);
    rect(212, 468, 3, 20);
    rect(202, 468, 3, 20);
    rect(192, 468, 3, 20);
    rect(182, 468, 3, 20);
    rect(172, 468, 3, 20);
    rect(162, 468, 3, 20);
    rect(152, 468, 3, 20);
    rect(142, 468, 3, 20);
    rect(255, 520, 15, 15, 4); // Draw top right structure
    rect(95, 500, 15, 15, 4); // Draw top left structure
    rect(95, 530, 15, 15, 4); // Draw bottom left structure

    // Draw Skyscraper 5
    rect(0, 540, 50, 160); // Draw main body of the skyscraper
    rect(0, 525, 15, 15); // Draw top left structure
    rect(25, 528, 5, 12); // Draw top left detail
    rect(26, 508, 3, 20); // Draw bottom left detail
    rect(40, 525, 3, 15); // Draw top right detail

    // Floor
    fill(137, 1, 89); // Set fill color to a shade of purple
    rect(300, 740, 600, 150); // Draw the floor rectangle

    // Layer 4

    fill(46, 6, 66); // Set colour for all layer 4 assets

    // Details

    // Billboard
    // Draw the main billboard structure
    rect(680, 840, 5, 30); // Draw left edge of the billboard
    rect(708, 840, 5, 30); // Draw right edge of the billboard
    rect(673, 830, 45, 23, 5); // Draw billboard body

    // Draw the lower section of the billboard
    rect(680, 800, 5, 30); // Draw left edge of the lower billboard
    rect(708, 800, 5, 30); // Draw right edge of the lower billboard
    rect(673, 790, 45, 23, 5); // Draw lower billboard body

    // Ladder
    rect(730, 745, 5, 200); // Draw ladder post
    rect(735, 745, 20, 5); // Draw ladder steps
    rect(735, 755, 20, 5);
    rect(735, 765, 20, 5);
    rect(735, 775, 20, 5);
    rect(735, 785, 20, 5);
    rect(735, 795, 20, 5);

    // Tank
    rect(750, 565, 20, 15); // Draw tank base
    rect(746, 560, 27, 5); // Draw tank top
    rect(746, 580, 27, 5);
    rect(752, 580, 3, 25); // Draw tank legs
    rect(759, 580, 3, 25);
    rect(766, 580, 3, 25);

    // Water Pump
    rect(520, 580, 20, 25, 3); // Draw water pump base
    rect(518, 576, 24, 5, 3); // Draw water pump top
    rect(524, 576, 3, 50); // Draw water pump body
    rect(529, 576, 3, 50);
    rect(534, 576, 3, 50);
    rect(534, 565, 3, 12); // Draw water pump handle
    rect(511, 590, 3, 12, 5); // Draw left part of the handle
    rect(514, 590, 10, 3, 5); // Draw right part of the handle

    // Pipes
    // Draw pipe segments
    rect(565, 600, 3, 32, 5); // Draw left vertical segment
    rect(565, 600, 18, 3, 5); // Draw left horizontal segment
    rect(572, 610, 3, 32, 5); // Draw right vertical segment
    rect(572, 610, 12, 3, 5); // Draw right horizontal segment

    // Clothes line
    stroke(46, 6, 66); // Set color for the clothes line
    line(120, 680, 220, 660); // Draw left clothes line
    line(820, 700, 620, 680); // Draw right clothes line
    noStroke(); // Reset stroke style to remove the stroke from subsequent shapes

    // Chimney
    rect(615, 470, 5, 30); // Draw left part of chimney base
    rect(630, 470, 5, 30); // Draw right part of chimney base

    // Draw chimney tops
    triangle(615, 470, 615, 460, 620, 470); // Draw chimney top left
    triangle(630, 470, 635, 460, 635, 470); // Draw chimney top right

    // Draw chimney sides
    rect(585, 495, 7, 7); // Draw left side of the chimney
    rect(595, 495, 7, 7); // Draw middle side of the chimney
    rect(605, 495, 7, 7); // Draw right side of the chimney

    // Rails
    rect(400, 810, 200, 5); // Draw upper rail
    rect(400, 830, 200, 5); // Draw middle rail
    rect(400, 850, 200, 5); // Draw lower rail

    // Draw rail posts
    rect(440, 810, 5, 20);
    rect(460, 810, 5, 20);
    rect(480, 810, 5, 20);

    rect(428, 830, 5, 20);
    rect(448, 830, 5, 20);
    rect(468, 830, 5, 20);
    rect(488, 830, 5, 20);

    rect(440, 850, 5, 20);
    rect(460, 850, 5, 20);
    rect(480, 850, 5, 20);

    // Pipes
    rect(140, 810, 60, 5); // Draw left pipe (horizontal)
    rect(140, 810, 5, 50); // Draw left pipe (vertical)
    rect(200, 810, 5, 50); // Draw right pipe (vertical)
    rect(155, 790, 5, 50); // Draw left pipe (angled)
    rect(175, 760, 5, 80); // Draw left pipe (angled)

    // Chimney
    rect(70, 600, 15, 40); // Draw chimney base
    triangle(70, 600, 70, 590, 85, 600); // Draw chimney top

    // Draw Skyscraper
    rect(750, 600, 50, 400); // Main body of the skyscraper
    // Windows on the left side of the skyscraper
    rect(745, 640, 20, 20, 4);
    rect(745, 700, 20, 20, 4);
    // Additional decorative elements
    rect(775, 580, 40, 20); // Decorative structure on top
    rect(780, 550, 4, 30); // Vertical detail
    rect(788, 530, 5, 50);

    // Draw Skyscraper 2
    rect(580, 500, 70, 500); // Main body of the skyscraper
    rect(500, 625, 80, 300); // Window section on the left side of the skyscraper
    // Windows on the right side of the skyscraper
    rect(635, 760, 20, 20, 4);
    rect(635, 820, 20, 20, 4);
    rect(635, 700, 20, 20, 4);
    rect(635, 640, 20, 20, 4);
    rect(635, 580, 20, 20, 4);
    rect(635, 520, 20, 20, 4);
    rect(575, 520, 20, 20, 4); // Additional windows
    rect(495, 760, 20, 20, 4);
    rect(495, 700, 20, 20, 4);
    rect(495, 640, 20, 20, 4);

    // Draw Skyscraper 3
    rect(260, 550, 160, 350); // Main body of the skyscraper
    rect(210, 600, 50, 320); // Window section on the left side of the skyscraper
    rect(350, 520, 50, 30); // Roof structure on the right side of the skyscraper

    // Windows on the left side
    rect(315, 510, 5, 40);
    rect(325, 520, 4, 30);

    // Railings on the right side
    // Rail 1
    rect(415, 610, 20, 3);
    rect(435, 610, 3, 18);
    rect(423, 610, 3, 18);
    rect(429, 610, 3, 18);
    rect(415, 620, 20, 8);
    // Rail 2
    rect(415, 690, 20, 3);
    rect(435, 690, 3, 18);
    rect(423, 690, 3, 18);
    rect(429, 690, 3, 18);
    rect(415, 700, 20, 8);
    // Rail 3
    rect(415, 770, 20, 3);
    rect(435, 770, 3, 18);
    rect(423, 770, 3, 18);
    rect(429, 770, 3, 18);
    rect(415, 780, 20, 8);

    // Railings on the left side
    // Rail 1
    rect(190, 610, 20, 3);
    rect(190, 610, 3, 18);
    rect(197, 610, 3, 18);
    rect(204, 610, 3, 18);
    rect(190, 620, 20, 8);
    // Rail 2
    rect(190, 690, 20, 3);
    rect(190, 690, 3, 18);
    rect(197, 690, 3, 18);
    rect(204, 690, 3, 18);
    rect(190, 700, 20, 8);
    // Rail 3
    rect(190, 770, 20, 3);
    rect(190, 770, 3, 18);
    rect(197, 770, 3, 18);
    rect(204, 770, 3, 18);
    rect(190, 780, 20, 8);

    // Add a triangle between the two rectangles to create a roof structure
    triangle(210, 600, 260, 600, 260, 550);

    // Draw Skyscraper 4
    rect(0, 630, 130, 270); // Main body of the skyscraper
    rect(125, 655, 10, 40, 4); // Windows
    rect(125, 715, 10, 40, 4);
    rect(125, 775, 10, 40, 4);
    rect(15, 610, 40, 30); // Structure on top of the skyscraper
    rect(18, 580, 5, 30); // Structure detail
    rect(38, 585, 5, 30);
    rect(28, 590, 5, 30);
    rect(48, 595, 5, 30);
    rect(105, 615, 12, 15); // Antenna on top of the skyscraper
    // Draw an ellipse on top of the last rectangle to represent the antenna's top
    ellipse(105 + 6, 620 - 7.5, 20);

    // Floor
    rect(100, 835, 150, 65); // Draw a rectangle representing the floor on the left side
    rect(300, 870, 600, 65); // Draw a larger rectangle representing the floor on the right side

    // Cherry Blossom
    fill(255, 183, 197);
    noStroke();
    let t = frameCount / 100; // Updates time

    for (var i = 0; i < 1; i++) {
      petals.push(new petal()); // Append petal object
    } // Random number of petals each frame

    // Loop through petals
    for (let blossom of petals) {
      blossom.update(t); // Update petal position
      blossom.display(); // Draw petal
    }
  } else {
    // Define the background gradient
    let backgroundGradient = drawingContext.createLinearGradient(
      0,
      0,
      0,
      height
    );
    backgroundGradient.addColorStop(0, "rgb(128,162,234)"); // Blue at the top
    backgroundGradient.addColorStop(1, "rgb(255, 255, 255)"); // White at the bottom

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

    for (let i = 0; i < 10; i++) {
      // Draw 10 ellipses for glow
      fill(255, 250, 240, glowOpacity);
      ellipse(sunX, sunY, glowRadius); // Draw ellipse
      glowOpacity -= glowStep; // Decrease opacity for next ellipse
      glowRadius += glowSizeStep; // Increase size for next ellipse
    }

    // Draw sun with glare
    strokeWeight(2);
    stroke(255, 250, 205);
    fill(255, 250, 240); // Yellow colour for the sun
    ellipse(sunX, sunY, sunRadius * 2); // Draw sun
    noStroke();

    // Add glare effect
    fill(255, 255, 200, 100); // Glare colour with transparency
    ellipse(sunX + 50, sunY - 50, sunRadius * 0.8); // Glare ellipse 1
    ellipse(sunX - 30, sunY + 30, sunRadius * 0.5); // Glare ellipse 2
    ellipse(sunX + 70, sunY + 60, sunRadius * 0.6); // Glare ellipse 3

    // Stars

    // Set fill color to white (RGB 255,255,255)
    fill(255);

    // Loop through each star in the stars array
    for (var s = 0; s < stars.length; s++) {
      // Call the draw method for each star object
      stars[s].draw();
    }

    // Layer 1
    fill(102, 135, 215); // Set colour for all layer 1 assets

    // Draw Skyscraper
    rect(780, 320, 50, 200); // Draw the skyscraper

    // Draw Skyscraper 1
    // Draw the main rectangular building
    rect(660, 175, 40, 250);
    // Draw the top part of the building
    rect(700, 195, 20, 250);
    triangle(700, 175, 700, 195, 720, 195);
    rect(720, 285, 20, 200);
    // Draw additional details
    rect(728, 275, 2, 10); // Detail on the top part
    rect(665, 150, 2, 25); // Detail on the left side
    rect(674, 170, 18, 5); // Detail on the left side

    // Draw Tokyo Skytree
    fill(72, 61, 139); // Set fill colour
    quad(485, 350, 505, 350, 510, 440, 480, 440); // Draw the main structure
    quad(470, 325, 520, 325, 515, 350, 475, 350); // Draw the top part
    stroke(72, 61, 139); // Set stroke coluor
    strokeWeight(5); // Set stroke weight
    line(476, 340, 450, 600); // Draw the left support
    line(514, 340, 535, 600); // Draw the right support
    noStroke(); // Reset stroke
    rect(467, 318, 55, 7, 10); // Draw the horizontal line at the top
    rect(481, 273, 28, 45); // Draw the first horizontal rectangle
    rect(467, 266, 55, 7, 10); // Draw the second horizontal line
    rect(473, 259, 43, 7); // Draw the third horizontal line
    rect(482, 225, 25, 35, 3); // Draw the first rectangle in the middle
    rect(490, 201, 10, 25, 3); // Draw the second rectangle in the middle
    rect(486, 107, 18, 95, 3); // Draw the bottom rectangle
    rect(482, 98, 26, 10, 3); // Draw the bottom line
    quad(482, 98, 508, 98, 512, 90, 478, 90); // Draw the bottom arc

    // Draw Skyscraper 3
    fill(102, 135, 215); // Set colour
    // Draw the main rectangular building
    rect(560, 350, 45, 250);
    // Draw additional structure
    rect(540, 375, 25, 250); // Additional structure on the left
    triangle(560, 350, 515 + 45, 375, 540, 375); // Roof triangle

    // Draw decorative elements
    rect(590, 330, 3, 20); // Decorative element 1
    rect(575, 336, 3, 20); // Decorative element 2
    rect(568, 346, 7, 4); // Decorative element 3

    // Draw Skyscraper 4
    // Draw the main rectangular building
    rect(615, 295, 35, 250);
    // Draw decorative elements
    rect(633, 291, 12, 4); // Decorative element 1
    rect(620, 289, 2, 6); // Decorative element 2

    // Draw Skyscraper 5
    // Draw a rectangular skyscraper
    rect(410, 330, 30, 250);

    // Draw Skyscraper 6
    // Draw the first section of the skyscraper
    rect(300, 220, 40, 300);
    // Draw the second section of the skyscraper
    rect(340, 240, 20, 300);
    // Draw the triangular roof for the second section
    triangle(340, 240, 360, 240, 340, 220);
    // Draw the third section of the skyscraper
    rect(360, 300, 20, 300);
    // Draw the triangular roof for the third section
    triangle(360, 300, 380, 300, 360, 280);
    // Draw additional details on the building
    rect(300, 200, 2, 20); // Detail 1
    rect(308, 210, 2, 12); // Detail 2

    // Draw Skyscraper 7
    // Draw circular top
    ellipse(270, 295, 25, 22);
    // Draw rectangular base
    rect(255, 295, 30, 500);

    // Draw Skyscraper 8
    // Draw the first section of the skyscraper
    rect(65, 230, 43, 500);
    // Draw the second section of the skyscraper
    rect(108, 330, 23, 500);
    // Draw details on the side of the building
    rect(70, 210, 3, 22); // Detail 1
    rect(75, 188, 2, 42); // Detail 2
    rect(95, 222, 2, 22); // Detail 3

    // Draw Skyscraper 9
    // Draw circular top
    ellipse(5, 275, 35, 30);
    // Draw rectangular base
    rect(0, 275, 50, 500);
    // Draw detail on the side of the building
    rect(40, 260, 2, 22);

    // Set fill colour to a light yellowish color
    fill(225, 207, 138);

    // Building 1
    // Draw ellipses representing windows for Building 1
    ellipse(675, 200, 5, 5);
    ellipse(685, 250, 5, 5);
    ellipse(670, 300, 5, 5);
    ellipse(695, 300, 5, 5);
    ellipse(720, 300, 5, 5);
    ellipse(710, 350, 5, 5);
    ellipse(680, 350, 5, 5);
    ellipse(695, 400, 5, 5);
    ellipse(725, 380, 5, 5);

    // Building 2
    // Draw rectangles representing windows for Building 2
    rect(640, 305, 3, 5, 2);
    rect(620, 325, 3, 5, 2);
    rect(642, 335, 3, 5, 2);
    rect(633, 335, 3, 5, 2);
    rect(627, 335, 3, 5, 2);
    rect(620, 360, 3, 5, 2);
    rect(630, 360, 3, 5, 2);
    rect(640, 370, 3, 5, 2);
    rect(625, 385, 3, 5, 2);

    // Building 3
    // Draw an ellipse representing a window for Building 3
    ellipse(565, 375, 5, 5);

    // Building 4
    // Draw rectangles representing windows for Building 4
    rect(355, 420, 3, 5, 2);
    rect(315, 375, 3, 5, 2);
    rect(315, 315, 3, 5, 2);
    rect(315, 245, 3, 5, 2);
    rect(345, 285, 3, 5, 2);
    rect(340, 335, 3, 5, 2);
    rect(350, 360, 3, 5, 2);

    // Building 5
    // Draw ellipses representing windows for Building 5
    ellipse(83, 267, 5, 5);
    ellipse(83, 317, 5, 5);
    ellipse(83, 367, 5, 5);
    ellipse(113, 357, 5, 5);

    // Clouds
    for (let n = 0; n < clouds.length; n = n + 1) {
      // Loop through each cloud object in the array

      // Move the cloud according to its move() method
      clouds[n].move();

      // Display the cloud using its display() method
      clouds[n].display();
    }

    // Draw a cloud slightly above the original position
    makeCloud(cloudx, cloudy - 50);

    // Draw a cloud shifted to the right and downwards from the original position
    makeCloud(cloudx + 100, cloudy + 100);

    // Draw a cloud at a position shifted to the left and downwards from the original position
    makeCloud(cloudx - 50, cloudy + 250);

    // Increment the horizontal position of the clouds by 0.1 units
    cloudx += 0.1;

    // Layer 2
    fill(70, 130, 180); // Set colour for all layer 2 assets

    // Details

    // Box
    // Draw the top layer of the box
    rect(465, 428, 35, 7); // Draw the top rectangle

    // Draw the middle layer of the box
    rect(470, 421, 25, 7); // Draw the middle rectangle

    // Draw the bottom layer of the box
    rect(475, 414, 15, 7); // Draw the bottom rectangle

    // Cables
    // Draw horizontal cable segments
    rect(590, 430, 55, 5);
    rect(590, 438, 55, 3);
    rect(590, 446, 55, 3);

    // Draw vertical cable segments
    rect(590, 430, 5, 55);

    // Draw cable connectors
    rect(599, 447, 3, 23);
    rect(607, 447, 3, 23);
    rect(615, 447, 3, 23);

    // Cables
    // Draw vertical cable segments
    rect(240, 460, 40, 3);
    rect(240, 445, 40, 3);
    rect(240, 410, 40, 3);
    rect(240, 425, 40, 3);
    rect(240, 480, 40, 3);
    rect(240, 495, 40, 3);

    // Draw cable connectors
    rect(245, 480, 3, 18);
    rect(250, 480, 3, 18);
    rect(255, 480, 3, 18);
    rect(260, 480, 3, 18);
    rect(265, 480, 3, 18);
    rect(265, 445, 3, 18);
    rect(260, 445, 3, 18);
    rect(255, 445, 3, 18);
    rect(250, 445, 3, 18);
    rect(245, 445, 3, 18);
    rect(240, 445, 3, 18);
    rect(265, 410, 3, 18);
    rect(260, 410, 3, 18);
    rect(255, 410, 3, 18);
    rect(250, 410, 3, 18);
    rect(245, 410, 3, 18);
    rect(240, 410, 3, 18);

    // Ladder
    rect(141, 300, 3, 200); // Draw the main vertical bar of the ladder
    noFill(); // No fill for subsequent shapes
    stroke(70, 130, 180); // Set stroke colour to a shade of pink
    strokeWeight(3); // Set stroke weight to 3 pixels
    line(143, 300, 165, 272); // Draw diagonal support line for the ladder
    fill(70, 130, 180); // Set fill colour to the same shade of pink
    noStroke(); // No stroke for subsequent shapes
    // Draw ladder steps
    rect(141, 314, 10, 3);
    rect(141, 330, 10, 3);
    rect(141, 346, 10, 3);
    rect(141, 362, 10, 3);
    rect(141, 378, 10, 3);
    rect(141, 394, 10, 3);
    rect(141, 410, 10, 3);
    rect(141, 426, 10, 3);
    rect(141, 442, 10, 3);
    rect(141, 458, 10, 3);
    rect(141, 474, 10, 3);

    // Outlet
    // Draw outlet bars
    rect(77, 387, 3, 30); // Draw first outlet bar
    rect(85, 375, 3, 15); // Draw second outlet bar
    rect(77, 387, 8, 3); // Draw third outlet bar
    rect(90, 360, 3, 40); // Draw fourth outlet bar

    // Draw Skyscraper
    rect(775, 500, 50, 400); // Draw main body of the skyscraper

    // Draw Skyscraper 2
    rect(620, 395, 45, 380); // Draw main body of the skyscraper

    // Draw additional details
    rect(590, 470, 30, 30);
    triangle(695, 410, 665, 410, 665, 395);
    rect(630, 365, 3, 30);
    rect(633, 383, 3, 8);
    rect(627, 370, 3, 8);

    // Draw Skyscraper 3
    rect(455, 435, 100, 380); // Draw main body of the skyscraper

    // Draw additional details
    rect(515, 431, 30, 4);
    rect(530, 428, 12, 3);
    rect(525, 419, 2, 12);

    // Draw Skyscraper 4
    rect(370, 350, 55, 380); // Draw main body of the skyscraper
    ellipse(397.5, 360, 50, 45); // Draw rounded top of the skyscraper

    // Draw details on the sides
    rect(368, 360, 6, 6, 4); // Draw detail on the left side
    rect(368, 370, 6, 6, 4); // Draw detail on the left side
    rect(421, 360, 6, 6, 4); // Draw detail on the right side
    rect(421, 370, 6, 6, 4); // Draw detail on the right side
    rect(368, 400, 6, 6, 4); // Draw detail on the left side
    rect(368, 410, 6, 6, 4); // Draw detail on the left side
    rect(368, 440, 6, 6, 4); // Draw detail on the left side
    rect(368, 450, 6, 6, 4); // Draw detail on the left side
    rect(421, 400, 6, 6, 4); // Draw detail on the right side
    rect(421, 410, 6, 6, 4); // Draw detail on the right side
    rect(421, 440, 6, 6, 4); // Draw detail on the right side
    rect(421, 450, 6, 6, 4); // Draw detail on the right side

    // Draw Skyscraper 5
    rect(270, 410, 60, 380); // Draw main body of the skyscraper
    rect(330, 430, 15, 380); // Draw right side details
    triangle(330, 410, 330, 430, 345, 430);

    // Draw additional details
    rect(315, 405, 5, 5);
    rect(305, 400, 3, 10);
    rect(288, 406, 10, 4);
    rect(274, 401, 10, 9);

    // Draw Skyscraper 6
    rect(165, 270, 75, 380); // Draw main body of the skyscraper
    rect(150, 290, 15, 380); // Draw left side detail
    triangle(165, 270, 150, 290, 165, 290); // Draw left side detail

    // Draw right side details
    rect(236, 430, 6, 12, 4); // Draw each right side detail
    rect(236, 390, 6, 12, 4);
    rect(236, 350, 6, 12, 4);
    rect(236, 310, 6, 12, 4);
    rect(220, 230, 2, 40); // Draw additional details
    rect(220, 230, 4, 10);
    rect(218, 260, 4, 10);
    rect(205, 250, 2, 20);
    rect(204, 265, 4, 6);
    rect(204, 250, 4, 6);

    // Draw Skyscraper 7
    rect(35, 400, 80, 380); // Draw main body of the skyscraper

    // Draw left side details
    for (let y = 410; y <= 530; y += 10) {
      rect(33, y, 6, 8, 4); // Draw each left side detail
    }

    // Draw right side details
    for (let y = 410; y <= 440; y += 10) {
      rect(111, y, 6, 8, 4); // Draw each right side detail
    }
    // Draw additional details
    rect(100, 394, 6, 6); // Draw additional detail
    rect(45, 390, 20, 10); // Draw additional detail

    // Layer 2 - Train Tracks

    // Details

    // Train Tracks
    fill(75, 0, 130); // Set colour for the train tracks

    // Draw main track
    rect(0, 525, width, 15); // Draw main track

    // Draw crossbars
    for (let i = 0; i <= 800; i += 10) {
      rect(i, 519, 3, 6); // Draw each crossbar
    }

    // Train Stands
    // Draw vertical stands
    rect(90, 519, 6, 200);
    rect(60, 519, 6, 200);
    rect(270, 519, 6, 200);
    rect(300, 519, 6, 200);
    rect(480, 519, 6, 300);
    rect(510, 519, 6, 300);
    rect(540, 519, 6, 300);
    rect(570, 519, 6, 300);
    rect(655, 519, 6, 300);
    rect(785, 519, 6, 300);
    // Draw horizontal stands
    rect(0, 560, 800, 6);
    rect(0, 590, 800, 6);
    rect(0, 620, 800, 6);
    rect(0, 650, 800, 6);
    rect(0, 680, 800, 6);
    rect(0, 710, 800, 6);

    // Train

    // Roof
    // fill(216, 191, 216); // Fill colour for the roof
    // rect(255, 95, 30, 8, 4); // Draw rectangles for the roof of the first carriage
    // rect(200, 95, 30, 8, 4);
    // rect(365, 95, 30, 8, 4); // Draw rectangles for the roof of the second carriage
    // rect(305, 95, 30, 8, 4);

    // Carriages
    // fill(218, 112, 214); // Fill colour for the carriages
    // rect(300, 100, 100, 40, 3); // Draw the first carriage
    // rect(194, 100, 100, 40, 3); // Draw the second carriage

    // Connection
    // fill(216, 191, 216); // Fill colour for the connection
    // rect(294, 105, 6, 30); // Draw the connection between the carriages

    // Set fill colour to a light yellowish color
    fill(225, 207, 138);

    // Building 1
    // Draw rectangles representing lights for Building 1
    rect(470, 450, 4, 6, 2);
    rect(520, 470, 4, 6, 2);
    rect(475, 505, 4, 6, 2);
    rect(540, 500, 4, 6, 2);
    rect(530, 515, 4, 6, 2);

    // Building 2
    // Draw an ellipse representing a light for Building 2
    ellipse(385, 365, 6, 6);

    // Building 3
    // Draw a rectangle representing a light for Building 3
    rect(290, 450, 4, 6, 2);

    // Building 4
    // Draw ellipses representing lights for Building 4
    ellipse(225, 300, 6, 6);
    ellipse(225, 450, 6, 6);
    ellipse(165, 400, 6, 6);
    ellipse(165, 360, 6, 6);

    // Building 5
    // Draw rectangles representing lights for Building 5
    rect(45, 490, 4, 6, 2);
    rect(45, 435, 4, 6, 2);
    rect(45, 415, 4, 6, 2);

    // Layer 3
    fill(21, 42, 109); // Set colour for all layer 3 assets

    // Tank

    // Draw tank body
    rect(65, 570, 23, 23, 5); // Draw tank body

    // Draw tank pipes
    rect(80, 575, 100, 3, 5); // Draw top pipe
    rect(80, 585, 100, 3, 5); // Draw bottom pipe
    rect(40, 575, 100, 3, 5); // Draw top pipe
    rect(40, 585, 100, 3, 5); // Draw bottom pipe

    // Billboard
    // Draw billboard
    rect(680, 400, 3, 30); // Draw left stand of the billboard
    rect(710, 400, 3, 30); // Draw right stand of the billboard
    rect(673, 377, 45, 23, 5); // Draw main billboard area

    // Outlet
    // Draw outlet bars
    rect(750, 415, 20, 5);
    rect(750, 425, 24, 5);
    rect(750, 435, 16, 5);
    rect(750, 445, 21, 5);
    rect(750, 455, 17, 5);
    rect(440, 495, 10, 15); // Draw outlet base
    rect(450, 495, 6, 25); // Draw outlet pipe

    // Ruins
    // Draw ruins structures
    rect(385, 440, 3, 40); // Draw vertical details
    rect(395, 425, 3, 60);
    rect(385, 445, 10, 3); // Draw horizontal details
    rect(385, 455, 10, 3);
    rect(385, 465, 10, 3);
    rect(385, 475, 10, 3);

    // Ladder
    // Draw ladder steps
    for (let y = 440; y <= 710; y += 10) {
      rect(657, y, 15, 4, 5); // Draw each step of the ladder
    }
    // Draw ladder sides
    rect(655, 440, 3, 274, 5); // Draw the sides of the ladder

    // Pipes
    // Draw pipe segments
    rect(486, 575, 3, 92, 5); // Draw vertical segment
    rect(481, 679, 3, 30, 5); // Draw vertical segment
    rect(465, 575, 22, 3, 5); // Draw horizontal segment
    rect(468, 630, 20, 3, 5); // Draw horizontal segment
    rect(476, 679, 13, 3, 5); // Draw horizontal segment
    rect(476, 708, 13, 3, 5); // Draw horizontal segment
    rect(486, 727, 15, 3, 5); // Draw horizontal segment
    rect(486, 708, 3, 20, 5); // Draw vertical segment
    rect(476, 708, 3, 35, 5); // Draw vertical segment
    rect(486, 666, 15, 3, 5); // Draw horizontal segment
    rect(486, 668, 3, 13, 5); // Draw vertical segment
    rect(468, 595, 10, 3, 5); // Draw horizontal segment
    rect(476, 595, 3, 85, 5); // Draw vertical segment

    // Draw Skyscraper
    rect(665, 410, 90, 560); // Draw main body of the skyscraper
    rect(735, 500, 43, 500); // Draw right side structure
    rect(768, 510, 15, 15, 4); // Draw top right structure
    rect(768, 550, 15, 15, 4); // Draw bottom right structure
    rect(740, 380, 3, 30); // Draw right side detail
    rect(560, 525, 3, 35); // Draw left side detail
    rect(730, 395, 3, 25); // Draw right side detail
    rect(550, 545, 3, 30); // Draw left side detail
    rect(549, 536, 5, 9); // Draw top left detail
    rect(739, 385, 5, 9); // Draw bottom left detail
    rect(739, 400, 5, 9); // Draw bottom left detail

    // Draw Skyscraper 2
    rect(540, 560, 70, 300); // Draw main body of the skyscraper
    rect(535, 570, 15, 15, 4); // Draw top left structure
    rect(535, 605, 15, 15, 4); // Draw bottom left structure

    // Draw Skyscraper 3
    rect(350, 480, 90, 300); // Draw main body of the skyscraper
    rect(440, 540, 30, 240); // Draw right side structure
    rect(320, 540, 30, 240); // Draw left side structure
    rect(425, 440, 2, 40); // Draw right detail
    rect(360, 450, 2, 30); // Draw left detail
    rect(422, 468, 3, 9); // Draw top right detail
    rect(426, 455, 3, 9); // Draw middle right detail
    rect(422, 442, 3, 9); // Draw bottom right detail
    ellipse(361, 450, 5, 5); // Draw window detail
    triangle(440, 515, 440, 540, 470, 540); // Draw top right structure
    triangle(350, 515, 320, 540, 350, 780); // Draw top left structure
    fill(21, 42, 109); // Set fill color to a shade of purple
    triangle(735, 430, 735, 500, 778, 500); // Draw additional structure

    // Draw Skyscraper 4
    rect(100, 480, 140, 400); // Draw main body of the skyscraper
    rect(240, 505, 25, 400); // Draw right side structure
    triangle(240, 505, 265, 505, 240, 480); // Draw top structure
    rect(110, 450, 30, 30); // Draw left side structure
    rect(128, 440, 12, 12); // Draw detail
    rect(140, 468, 95, 3); // Draw horizontal detail
    rect(232, 468, 3, 20); // Draw vertical details
    rect(222, 468, 3, 20);
    rect(212, 468, 3, 20);
    rect(202, 468, 3, 20);
    rect(192, 468, 3, 20);
    rect(182, 468, 3, 20);
    rect(172, 468, 3, 20);
    rect(162, 468, 3, 20);
    rect(152, 468, 3, 20);
    rect(142, 468, 3, 20);
    rect(255, 520, 15, 15, 4); // Draw top right structure
    rect(95, 500, 15, 15, 4); // Draw top left structure
    rect(95, 530, 15, 15, 4); // Draw bottom left structure

    // Draw Skyscraper 5
    rect(0, 540, 50, 160); // Draw main body of the skyscraper
    rect(0, 525, 15, 15); // Draw top left structure
    rect(25, 528, 5, 12); // Draw top left detail
    rect(26, 508, 3, 20); // Draw bottom left detail
    rect(40, 525, 3, 15); // Draw top right detail

    // Floor
    fill(21, 42, 109); // Set fill color to a shade of purple
    rect(300, 740, 600, 150); // Draw the floor rectangle

    // Set fill colour to a light yellowish color
    fill(225, 207, 138);

    // Building 1
    // Draw rectangles representing lights for Building 1
    rect(690, 445, 5, 7, 2);
    rect(760, 510, 5, 7, 2);
    rect(720, 530, 5, 7, 2);
    rect(680, 550, 5, 7, 2);
    rect(710, 620, 5, 7, 2);
    rect(675, 675, 5, 7, 2);

    // Building 2
    // Draw ellipses representing lights for Building 2
    ellipse(240, 510, 7, 7);
    ellipse(130, 580, 7, 7);

    // Layer 4

    fill(8, 21, 37); // Set colour for all layer 4 assets

    // Details

    // Billboard
    // Draw the main billboard structure
    rect(680, 840, 5, 30); // Draw left edge of the billboard
    rect(708, 840, 5, 30); // Draw right edge of the billboard
    rect(673, 830, 45, 23, 5); // Draw billboard body

    // Draw the lower section of the billboard
    rect(680, 800, 5, 30); // Draw left edge of the lower billboard
    rect(708, 800, 5, 30); // Draw right edge of the lower billboard
    rect(673, 790, 45, 23, 5); // Draw lower billboard body

    // Ladder
    rect(730, 745, 5, 200); // Draw ladder post
    rect(735, 745, 20, 5); // Draw ladder steps
    rect(735, 755, 20, 5);
    rect(735, 765, 20, 5);
    rect(735, 775, 20, 5);
    rect(735, 785, 20, 5);
    rect(735, 795, 20, 5);

    // Tank
    rect(750, 565, 20, 15); // Draw tank base
    rect(746, 560, 27, 5); // Draw tank top
    rect(746, 580, 27, 5);
    rect(752, 580, 3, 25); // Draw tank legs
    rect(759, 580, 3, 25);
    rect(766, 580, 3, 25);

    // Water Pump
    rect(520, 580, 20, 25, 3); // Draw water pump base
    rect(518, 576, 24, 5, 3); // Draw water pump top
    rect(524, 576, 3, 50); // Draw water pump body
    rect(529, 576, 3, 50);
    rect(534, 576, 3, 50);
    rect(534, 565, 3, 12); // Draw water pump handle
    rect(511, 590, 3, 12, 5); // Draw left part of the handle
    rect(514, 590, 10, 3, 5); // Draw right part of the handle

    // Pipes
    // Draw pipe segments
    rect(565, 600, 3, 32, 5); // Draw left vertical segment
    rect(565, 600, 18, 3, 5); // Draw left horizontal segment
    rect(572, 610, 3, 32, 5); // Draw right vertical segment
    rect(572, 610, 12, 3, 5); // Draw right horizontal segment

    // Clothes line
    stroke(46, 6, 66); // Set color for the clothes line
    line(120, 680, 220, 660); // Draw left clothes line
    line(820, 700, 620, 680); // Draw right clothes line
    noStroke(); // Reset stroke style to remove the stroke from subsequent shapes

    // Chimney
    rect(615, 470, 5, 30); // Draw left part of chimney base
    rect(630, 470, 5, 30); // Draw right part of chimney base

    // Draw chimney tops
    triangle(615, 470, 615, 460, 620, 470); // Draw chimney top left
    triangle(630, 470, 635, 460, 635, 470); // Draw chimney top right

    // Draw chimney sides
    rect(585, 495, 7, 7); // Draw left side of the chimney
    rect(595, 495, 7, 7); // Draw middle side of the chimney
    rect(605, 495, 7, 7); // Draw right side of the chimney

    // Rails
    rect(400, 810, 200, 5); // Draw upper rail
    rect(400, 830, 200, 5); // Draw middle rail
    rect(400, 850, 200, 5); // Draw lower rail

    // Draw rail posts
    rect(440, 810, 5, 20);
    rect(460, 810, 5, 20);
    rect(480, 810, 5, 20);

    rect(428, 830, 5, 20);
    rect(448, 830, 5, 20);
    rect(468, 830, 5, 20);
    rect(488, 830, 5, 20);

    rect(440, 850, 5, 20);
    rect(460, 850, 5, 20);
    rect(480, 850, 5, 20);

    // Pipes
    rect(140, 810, 60, 5); // Draw left pipe (horizontal)
    rect(140, 810, 5, 50); // Draw left pipe (vertical)
    rect(200, 810, 5, 50); // Draw right pipe (vertical)
    rect(155, 790, 5, 50); // Draw left pipe (angled)
    rect(175, 760, 5, 80); // Draw left pipe (angled)

    // Chimney
    rect(70, 600, 15, 40); // Draw chimney base
    triangle(70, 600, 70, 590, 85, 600); // Draw chimney top

    // Draw Skyscraper
    rect(750, 600, 50, 400); // Main body of the skyscraper
    // Windows on the left side of the skyscraper
    rect(745, 640, 20, 20, 4);
    rect(745, 700, 20, 20, 4);
    // Additional decorative elements
    rect(775, 580, 40, 20); // Decorative structure on top
    rect(780, 550, 4, 30); // Vertical detail
    rect(788, 530, 5, 50);

    // Draw Skyscraper 2
    rect(580, 500, 70, 500); // Main body of the skyscraper
    rect(500, 625, 80, 300); // Window section on the left side of the skyscraper
    // Windows on the right side of the skyscraper
    rect(635, 760, 20, 20, 4);
    rect(635, 820, 20, 20, 4);
    rect(635, 700, 20, 20, 4);
    rect(635, 640, 20, 20, 4);
    rect(635, 580, 20, 20, 4);
    rect(635, 520, 20, 20, 4);
    rect(575, 520, 20, 20, 4); // Additional windows
    rect(495, 760, 20, 20, 4);
    rect(495, 700, 20, 20, 4);
    rect(495, 640, 20, 20, 4);

    // Draw Skyscraper 3
    rect(260, 550, 160, 350); // Main body of the skyscraper
    rect(210, 600, 50, 320); // Window section on the left side of the skyscraper
    rect(350, 520, 50, 30); // Roof structure on the right side of the skyscraper

    // Windows on the left side
    rect(315, 510, 5, 40);
    rect(325, 520, 4, 30);

    // Railings on the right side
    // Rail 1
    rect(415, 610, 20, 3);
    rect(435, 610, 3, 18);
    rect(423, 610, 3, 18);
    rect(429, 610, 3, 18);
    rect(415, 620, 20, 8);
    // Rail 2
    rect(415, 690, 20, 3);
    rect(435, 690, 3, 18);
    rect(423, 690, 3, 18);
    rect(429, 690, 3, 18);
    rect(415, 700, 20, 8);
    // Rail 3
    rect(415, 770, 20, 3);
    rect(435, 770, 3, 18);
    rect(423, 770, 3, 18);
    rect(429, 770, 3, 18);
    rect(415, 780, 20, 8);

    // Railings on the left side
    // Rail 1
    rect(190, 610, 20, 3);
    rect(190, 610, 3, 18);
    rect(197, 610, 3, 18);
    rect(204, 610, 3, 18);
    rect(190, 620, 20, 8);
    // Rail 2
    rect(190, 690, 20, 3);
    rect(190, 690, 3, 18);
    rect(197, 690, 3, 18);
    rect(204, 690, 3, 18);
    rect(190, 700, 20, 8);
    // Rail 3
    rect(190, 770, 20, 3);
    rect(190, 770, 3, 18);
    rect(197, 770, 3, 18);
    rect(204, 770, 3, 18);
    rect(190, 780, 20, 8);

    // Add a triangle between the two rectangles to create a roof structure
    triangle(210, 600, 260, 600, 260, 550);

    // Draw Skyscraper 4
    rect(0, 630, 130, 270); // Main body of the skyscraper
    rect(125, 655, 10, 40, 4); // Windows
    rect(125, 715, 10, 40, 4);
    rect(125, 775, 10, 40, 4);
    rect(15, 610, 40, 30); // Structure on top of the skyscraper
    rect(18, 580, 5, 30); // Structure detail
    rect(38, 585, 5, 30);
    rect(28, 590, 5, 30);
    rect(48, 595, 5, 30);
    rect(105, 615, 12, 15); // Antenna on top of the skyscraper
    // Draw an ellipse on top of the last rectangle to represent the antenna's top
    ellipse(105 + 6, 620 - 7.5, 20);

    // Floor
    rect(100, 835, 150, 65); // Draw a rectangle representing the floor on the left side
    rect(300, 870, 600, 65); // Draw a larger rectangle representing the floor on the right side

    // Set fill colour to a light yellowish color
    fill(225, 207, 138);

    // Building 1
    // Draw ellipses representing lights for Building 1
    ellipse(630, 530, 12, 12);
    ellipse(630, 650, 12, 12);
    ellipse(630, 770, 12, 12);
    ellipse(520, 650, 12, 12);
    ellipse(520, 710, 12, 12);
    ellipse(520, 845, 12, 12);

    // Building 2
    // Draw rectangles representing lights for Building 2
    rect(390, 600, 10, 14, 2);
    rect(390, 680, 10, 14, 2);
    rect(390, 760, 10, 14, 2);
    rect(230, 760, 10, 14, 2);
    rect(230, 680, 10, 14, 2);

    // Building 3
    // Draw rectangles representing lights for Building 3
    rect(90, 790, 10, 10, 3);
    rect(90, 720, 10, 10, 3);
    rect(90, 650, 10, 10, 3);
    rect(40, 790, 10, 10, 3);
    rect(40, 720, 10, 10, 3);
    rect(40, 650, 10, 10, 3);

    // Rain
    fill(0);
    for (var i = 0; i < 200; i++) {
      // Show and update each raindrop in the 'drop' array
      drop[i].show(); // Display the raindrop
      drop[i].update(); // Update the raindrop's position
    }
  }
}

// Petal class
function petal() {
  // Initialise coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(10, 0 * PI);
  this.size = random(3.5, 7);

  this.radius = sqrt(random(pow(width / 1, 2)));
  this.update = function (time) {
    // X position follows a circle
    let w = 0.1; // Angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 1 + this.radius * tan(angle); // Calculates tangent of the angle the petals fall
    this.posY += pow(this.size, 0.5);

    // Delete petal if past end of screen
    if (this.posY > height) {
      let index = petals.indexOf(this);
      petals.splice(index, 1);
    }
  };

  // Method to display the petal on the canvas
  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}

// Rain class
function Drop() {
  // Initialise a random x and y position for the raindrop
  this.x = random(0, width);
  this.y = random(0, -height);

  // Display function for the raindrop
  this.show = function () {
    // Set color and style properties
    noStroke(); // No outline
    fill(255); // White fill colour

    // Draw the raindrop as an ellipse
    ellipse(this.x, this.y, random(1, 5), random(1, 5)); // Random size
  };

  // Update function for the raindrop
  this.update = function () {
    // Set the speed of the raindrop (random between 5 and 10)
    this.speed = random(5, 10);

    // Set the gravitational force acting on the raindrop
    this.gravity = 1.05;

    // Update the y position of the raindrop based on its speed and gravity
    this.y = this.y + this.speed * this.gravity;

    // Check if the raindrop has reached the bottom of the canvas
    if (this.y > height) {
      // If so, reset its position to the top of the canvas
      this.y = random(0, -height); // Randomize y position
      this.gravity = 0; // Reset gravity to prevent immediate fall
    }
  };
}

// Star class
class Star {
  // Constructor function to initialise a new Star object
  constructor() {
    // Set the x-coordinate of the star randomly within the width of the canvas
    this.x = random(width);
    // Set the y-coordinate of the star randomly within the height of the canvas
    this.y = random(height);
    // Set the size of the star randomly between 0.25 and 3
    this.size = random(0.25, 3);
    // Set the initial angle (phase) of the star's oscillation
    this.t = random(TAU); // TAU is equivalent to 2 * PI, representing a full circle
  }

  // Method to draw the star
  draw() {
    // Increment the angle (phase) of the star's oscillation
    this.t += 0.1;
    // Calculate the scale factor based on the size and the sine function of the angle
    var scale = this.size + sin(this.t) * 2;
    // Set stroke to none
    noStroke();
    // Draw an ellipse (the star) at the current position with the calculated scale
    ellipse(this.x, this.y, scale, scale);
  }
}

// References:
// https://editor.p5js.org/abrock/sketches/SyyaEusom
// https://editor.p5js.org/kelsierose94/sketches/MU2Y21aG0
// https://editor.p5js.org/wvnl/sketches/5wnuHAXKd
// https://www.youtube.com/watch?v=XvO7k1LPRx8&list=PLorwxKPZJphyI8AH5Cm6dS-_Wqz6HWPr7&index=56
// https://www.youtube.com/watch?v=o7uZpIY5qx0&list=PLorwxKPZJphyI8AH5Cm6dS-_Wqz6HWPr7&index=5
// https://www.youtube.com/watch?app=desktop&v=SN9n2c37ZEQ
// https://www.reddit.com/r/DigitalArt/comments/l8h8p1/city_skyline/
