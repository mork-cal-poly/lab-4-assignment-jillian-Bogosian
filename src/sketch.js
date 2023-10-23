function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawCard();
  drawCreature(100,100,color(28,198,229), color(4,0,230));
}

function drawCard(){
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
