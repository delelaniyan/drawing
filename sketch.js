function setup() {
  createCanvas(5000, 5000);
}

function draw() {
 fill(mouseX, mouseY, 100);
 triangles(mouseX,mouseY,100,100);
}
