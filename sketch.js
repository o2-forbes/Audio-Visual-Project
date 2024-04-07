let spaceship;
let aliens = [];
let alienBullets = [];
let bullets = [];

function setup() {
  createCanvas(600, 400);
  spaceship = new Spaceship();
  
  // Creating aliens
  for (let i = 0; i < 10; i++) {
    aliens.push(new Alien(random(width), random(height/2)));
  }
}

function draw() {
  background(0);
  
  // Move and display spaceship
  spaceship.update();
  spaceship.display();
  
  // Move and display aliens
  for (let alien of aliens) {
    alien.update();
    alien.display();
    
    // Check collision with spaceship
    if (spaceship.hits(alien)) {
      noLoop();
      console.log("Game Over!");
    }
    
    // Alien firing bullets
    if (random(1) < 0.01) { // Adjust the probability of firing
      let alienBullet = new Bullet(alien.x, alien.y, true); // true indicates alien-fired bullet
      alienBullets.push(alienBullet);
    }
  }
  
  // Move and display bullets fired by aliens
  for (let alienBullet of alienBullets) {
    alienBullet.update();
    alienBullet.display();
    if (alienBullet.offscreen()) {
      alienBullets.splice(alienBullet, 1);
    }
  }
  
  // Move and display bullets fired by spaceship
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].display();
    if (bullets[i].offscreen()) {
      bullets.splice(i, 1);
    } else {
      // Check collision with aliens
      for (let j = aliens.length - 1; j >= 0; j--) {
        if (bullets[i].hits(aliens[j])) {
          aliens.splice(j, 1);
          bullets.splice(i, 1);
          break;
        }
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 32) { // Spacebar key
    let bullet = new Bullet(spaceship.x + spaceship.width / 2, height - spaceship.height, false); // false indicates player-fired bullet
    bullets.push(bullet);
  }
}

class Spaceship {
  constructor() {
    this.width = 60;
    this.height = 20;
    this.x = width / 2;
    this.y = height - this.height;
    this.speed = 5;
  }
  
  update() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.width) {
      this.x += this.speed;
    }
  }
  
  display() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
  
  hits(alien) {
    return (
      this.x < alien.x + alien.size &&
      this.x + this.width > alien.x &&
      this.y < alien.y + alien.size &&
      this.y + this.height > alien.y
    );
  }
}

class Alien {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(1, 3);
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height) {
      this.y = 0;
    }
  }
  
  display() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Bullet {
  constructor(x, y, alienFired) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = 5;
    this.alienFired = alienFired; // true if fired by alien, false if fired by player
  }
  
  update() {
    if (this.alienFired) {
      this.y += this.speed;
    } else {
      this.y -= this.speed;
    }
  }
  
  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
  
  offscreen() {
    return this.y < 0 || this.y > height;
  }
  
  hits(alien) {
    let d = dist(this.x, this.y, alien.x, alien.y);
    return d < this.radius + alien.size / 2;
  }
}
