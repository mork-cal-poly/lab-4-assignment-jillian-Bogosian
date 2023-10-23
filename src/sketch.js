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

function mousePressed(){
  if (mouseY >280){
     badHand=true;
  }
}
