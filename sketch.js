function preload() { 
  a = random(0.1, 1.3);
  b = random(1, 9);
  c = random(1,5);
  d = random(5.10);
    
     } 
  
  // this class describes the properties of a single particle.
  class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      
      
      this.x = random(0,width);
      this.y = random(0,height);
      this.r = random(a,b);
      this.xSpeed = random(-0.08,0.08);
      this.ySpeed = random(-0.08,0.08);
    }
  
  // creation of a particle.
    createParticle() {
      noStroke();
      fill(500);
      circle(this.x,this.y,this.r);
    }
  
  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  
  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  
  }
  
  // an array to add multiple particles
  let particles = [];
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0;i<width/c;i++){
      particles.push(new Particle());
    }
  }
  
  function draw() {
    background(0);
    for(let i = 0;i<particles.length;i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      cursor(CROSS);
      
    }
    
     function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
    
    
  }
  