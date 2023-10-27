function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  drawBackground(0, 0);
  drawDog(300, 300, 0.2);
  drawCard();
  drawCreature(100, 100, color(28, 198, 229), color(4, 0, 230));
}

function drawCard() {
  push();
  //the two cards- the white part
  push();
  translate(80, 150);
  noStroke();
  fill(255, 255, 255);
  //card on left
  rotate(-PI / 7);

  rect(0, 0, 120, 170);
  //card on right
  translate(60, -20);
  rotate(PI / 4);
  rect(60, 20, 120, 170);
  pop();

  //the outline on the cards
  push();
  translate(80, 150);
  rotate(-PI / 7);
  translate(57, -5);
  rotate(PI / 4);
  rect(60, 20, 100, 150);
  pop();

  line(100, 160, 140, 240);
  line(100, 160, 180, 120);
  line(180, 120, 195, 150);

  //dimonds
  push();
  translate(180, 190);
  fill(255, 0, 0);
  noStroke();
  rotate(PI / 9);
  scale(0.6);
  //middle triangle
  triangle(0, 0, 20, 0, 10, 30);
  triangle(0, 0, 20, 0, 10, -30);

  //bottom triangle
  translate(110, 160);
  triangle(0, 0, 20, 0, 10, 30);
  triangle(0, 0, 20, 0, 10, -30);

  //big triangle
  scale(1.7);
  translate(-35, -50);
  triangle(0, 0, 20, 0, 10, 30);
  triangle(0, 0, 20, 0, 10, -30);

  pop();

  //top triangle
  fill(255, 0, 0);
  noStroke();
  scale(0.6);
  translate(200, 300);
  rotate(-PI / 9);
  triangle(0, 0, 20, 0, 10, 30);
  triangle(0, 0, 20, 0, 10, -30);
  pop();
}

//must click on the "table" almost like gamboling table, or really just lower part of screen for it to work

function drawCreature(x, y, colorBody, colorMouth) {
  push();
  translate(160, 170);
  translate(x, y);

  //jellyfish body
  noStroke();
  fill(colorBody);
  ellipse(0, 0, 130, 80);
  arc(0, 30, 50, 60, 0, PI);
  arc(-30, 27, 50, 60, 0, (7 * PI) / 4);
  arc(-50, 24, 50, 50, 0, (7 * PI) / 4);
  arc(30, 27, 50, 60, (7 * PI) / 4, PI);
  arc(50, 24, 50, 50, (3 * PI) / 2, PI);

  //legs
  strokeWeight(10);
  stroke(colorBody);

  //left most leg
  beginShape();
  curveVertex(0, 0);
  curveVertex(-50, 50);
  curveVertex(-50, 100);
  curveVertex(-50, 100);
  endShape();

  //right most leg
  beginShape();
  curveVertex(0, 0);
  curveVertex(50, 50);
  curveVertex(50, 100);
  curveVertex(50, 100);
  endShape();

  //middle leg
  beginShape();
  curveVertex(0, 0);
  curveVertex(0, 50);
  curveVertex(5, 100);
  curveVertex(-20, 100);
  endShape();

  //left middle leg
  beginShape();
  curveVertex(0, 0);
  curveVertex(-20, 50);
  curveVertex(-20, 120);
  curveVertex(-20, 120);
  endShape();

  //right middle leg
  beginShape();
  curveVertex(0, 0);
  curveVertex(20, 50);
  curveVertex(20, 120);
  curveVertex(20, 120);
  endShape();

  //face details
  stroke(colorMouth);
  strokeWeight(0.5);
  arc(20, 0, 20, 20, PI, 0);
  arc(-20, 0, 20, 20, PI, 0);
  triangle(5, 10, -5, 10, 0, 5);
  arc(20, 0, 20, 20, PI, 0);
  strokeWeight(10);
  point(0, 30);

  pop();
}

function drawBackground(x, y) {
  push();
  translate(x, y);

  //bubbles
  noStroke();
  fill(170, 238, 229);

  //left group of bubbles
  circle(50, 90, 40);
  circle(80, 40, 30);
  circle(50, 10, 20);
  circle(100, 90, 20);
  circle(60, 140, 10);
  circle(30, 40, 10);

  //right group of bubbles
  circle(270, 79, 25);
  circle(260, 40, 15);
  circle(300, 10, 20);
  circle(320, 90, 20);
  circle(350, 140, 10);
  circle(350, 40, 10);
  circle(310, 50, 30);
  circle(310, 140, 30);
  circle(280, 120, 10);
  circle(245, 150, 10);

  //sand dunes
  fill(240, 223, 135);
  arc(20, 400, 130, 150, PI, 0);
  arc(90, 400, 130, 150, PI, 0);
  arc(160, 400, 130, 150, PI, 0);
  arc(230, 400, 130, 150, PI, 0);
  arc(300, 400, 130, 150, PI, 0);
  arc(370, 400, 130, 150, PI, 0);

  pop();
}

function drawDog(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  noStroke();
  //tail
  fill(209, 130, 27);
  triangle(80, -40, 120, -130, 60, -60);
  //back legs
  fill("white");
  ellipse(-110, -35, 50, 70);
  ellipse(110, -35, 50, 70);
  fill(250, 235, 212);
  ellipse(-60, -30, 70, 50);
  ellipse(60, -30, 70, 50);

  fill(244, 155, 162); //paws
  ellipse(-110, -30, 20, 30);
  ellipse(110, -30, 20, 30);
  circle(-110, -60, 10);
  circle(-120, -50, 10);
  circle(-100, -50, 10);
  circle(110, -60, 10);
  circle(120, -50, 10);
  circle(100, -50, 10);

  //body
  fill(209, 99, 34);
  circle(0, -80, 150);
  fill(250, 235, 212);
  triangle(0, -50, -50, -130, 50, -130);
  rect(-20, -70, 40, 60);

  // front legs
  fill(209, 130, 27);
  ellipse(-30, -50, 40, 80);
  ellipse(30, -50, 40, 80);
  fill(255, 255, 255);
  ellipse(-30, -15, 60, 30);
  ellipse(30, -15, 60, 30);

  //head
  fill(209, 99, 34);
  triangle(-50, -270, -80, -230, -100, -330); //ears
  triangle(50, -270, 80, -230, 100, -330);

  fill(244, 155, 162);
  triangle(-60, -270, -80, -250, -90, -310); //inner ears
  triangle(60, -270, 80, -250, 90, -310);

  fill(209, 130, 27);
  circle(0, -205, 170); //base
  triangle(-75, -200, -75, -180, -95, -190); // side fur
  triangle(75, -200, 75, -180, 95, -190);
  triangle(-70, -180, -70, -160, -90, -170);
  triangle(70, -180, 70, -160, 90, -170);
  triangle(-80, -270, -75, -230, -65, -250);
  triangle(80, -270, 75, -230, 65, -250);
  triangle(-70, -290, -65, -250, -55, -270);
  triangle(70, -290, 65, -250, 55, -270);

  fill(255, 255, 255); // nose bridge
  rect(-20, -290, 40, 100);
  ellipse(0, -160, 140, 80);

  ellipse(-40, -250, 30, 10); //eyebrows
  ellipse(40, -250, 30, 10);

  fill("black");
  ellipse(-40, -220, 20, 30); //eyes
  arc(50, -220, 40, 20, PI / 4, -PI / 4, PIE);

  fill("white");
  ellipse(-40, -225, 10, 15); //inner eye

  fill("black");
  ellipse(0, -180, 40, 20); //nose
  fill("white");
  ellipse(0, -185, 20, 10); //inner nose
  fill("black");
  arc(0, -170, 70, 80, 0 * PI, PI, CHORD); //mouth
  fill(244, 155, 162);
  ellipse(0, -145, 50, 30); //tongue

  pop();
}
