let clicked = false;
let creatureX = 100;
let creatureY = 100;
let r = 0;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  
}

function draw() {
  background(78,244,209);
  drawBackground(0, 0);
  drawCard();
  drawCreature(creatureX,creatureY,color(28,198,229), color(4,0,230));
  console.log(clicked);
  updateJellyfish();
  console.log(creatureX);
  updateCards();
  console.log(r);
}

function drawCard(r){
  rotate(r);
  push();
  //the two cards- the white part
    push();
      translate(80,150);
      noStroke();
      fill(255,255,255);
    //card on left
      rotate(-PI/7);
      
      rect(0,0,120,170);
    //card on right
      translate(60,-20);
      rotate(PI/4);
      rect(60,20,120,170);
    pop();
  
  //the outline on the cards
    push(); 
      translate(80,150);
      rotate(-PI/7);
      translate(57,-5);
      rotate(PI/4);
      rect(60,20,100,150);
    pop();
  
    line(100,160,140,240);
    line(100,160,180,120);
    line(180,120,195,150);
  
  //dimonds
    push();
      translate(180,190);
      fill(255,0,0);
      noStroke();
      rotate(PI/9)
      scale(.6);
  //middle triangle
      triangle(0,0,20,0,10,30);
      triangle(0,0,20,0,10,-30);
    
  //bottom triangle
      translate(110,160);
      triangle(0,0,20,0,10,30);
      triangle(0,0,20,0,10,-30);
  
  //big triangle
      scale(1.7);
      translate(-35,-50);
      triangle(0,0,20,0,10,30);
      triangle(0,0,20,0,10,-30);
  
    pop();
  
  //top triangle
    fill(255,0,0);
    noStroke();
    scale(.6);
    translate(200,300);
    rotate(-PI/9);
    triangle(0,0,20,0,10,30);
    triangle(0,0,20,0,10,-30);
  pop();
}

//must click on the "table" almost like gamboling table, or really just lower part of screen for it to work


function drawCreature(x,y, colorBody, colorMouth){
  push();
  translate(160, 170);
  translate(x,y);

  //jellyfish body
  noStroke();
  fill(colorBody);
  ellipse(0,0,130,80);
  arc(0, 30,50,60, 0,PI);
  arc(-30, 27,50,60, 0, 7*PI/4);
  arc(-50, 24,50,50, 0, 7*PI/4);
  arc(30, 27,50,60, 7*PI/4,PI);
  arc(50, 24,50,50, 3*PI/2, PI);

  //legs
  strokeWeight(10);
  stroke(colorBody);

  //left most leg
  beginShape();
    curveVertex(0,0);
    curveVertex(-50,50);
    curveVertex(-50,100);
    curveVertex(-50,100);
  endShape();

  //right most leg
  beginShape();
    curveVertex(0,0);
    curveVertex(50,50);
    curveVertex(50,100);
    curveVertex(50,100);
  endShape();

  //middle leg
  beginShape();
    curveVertex(0,0);
    curveVertex(0,50);
    curveVertex(5,100);
    curveVertex(-20,100);
  endShape();

  //left middle leg    
  beginShape();
    curveVertex(0,0);
    curveVertex(-20,50);
    curveVertex(-20,120);
    curveVertex(-20,120);
  endShape();
  
  //right middle leg
  beginShape();
    curveVertex(0,0);
    curveVertex(20,50);
    curveVertex(20,120);
    curveVertex(20,120);
  endShape();
  
  //face details
  stroke(colorMouth);
  strokeWeight(.5);
  arc(20, 0,20,20, PI, 0);
  arc(-20, 0,20,20, PI, 0);
  triangle(5,10,-5,10,0,5);
  arc(20, 0,20,20, PI, 0);
  strokeWeight(10);
  point(0,30);

pop();
}

function drawBackground(x,y){
  push();
  translate(x,y);

  //bubbles
  noStroke();
  fill(170,238,229);

  //left group of bubbles
  circle(50,90,40);
  circle(80,40,30);
  circle(50,10,20);
  circle(100,90,20);
  circle(60,140,10);
  circle(30,40,10);

  //right group of bubbles
  circle(270,79,25);
  circle(260,40,15);
  circle(300,10,20);
  circle(320,90,20);
  circle(350,140,10);
  circle(350,40,10);
  circle(310,50,30);
  circle(310,140,30);
  circle(280,120,10);
  circle(245,150,10);
  
  //sand dunes 
  fill(240,223,135);
  arc(20, 400,130,150, PI, 0);
  arc(90, 400,130,150, PI, 0);
  arc(160, 400,130,150, PI, 0);
  arc(230, 400,130,150, PI, 0);
  arc(300, 400,130,150, PI, 0);
  arc(370, 400,130,150, PI, 0);

pop();

}

function mouseClicked() {
  if(mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400)
    clicked = !clicked;
}

function updateJellyfish(){
  if(clicked){
    creatureX = creatureX + 1;
  }
}

function updateCards(){
  if(creatureX > 400){
    r=r + PI / 20;
  }
}
