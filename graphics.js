function setup() {
    createCanvas(100, 100, WEBGL); //710, 400 original dimensions

    
  }
  
  function draw() {
    background(300);
  
    translate(0, 0, 0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50, 50, 50); //box size
    pop();
  }