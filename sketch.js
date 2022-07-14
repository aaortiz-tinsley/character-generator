// Self-portrait Character Generator
var canvas;
var eyes;
var shirt;
var earrings;
var bkgd;

function setup() {
  canvas = createCanvas(windowWidth, windowWidth);
  canvas.position(0, 0);
  colorMode(RGB);
  bkgd = color(200);
  // Access CSS of pupils to force color change when clicked  
  eyes = selectAll('.pupils');
  // Access both pupils, one by one.
  for(i = 0; i < eyes.length; i++) {
      eyes[i].mouseClicked(changeEyes);
    }
  // Access CSS of shirt to force color change when clicked  
  shirt = select('.main-body');
  shirt.mouseClicked(changeShirt);
  // Access CSS of earrings to force color change when clicked  
  earrings = selectAll('.earring');
  for(i = 0; i < earrings.length; i++) {
      earrings[i].mouseClicked(changeEarring);
  }
  // Change background color when clicked
  canvas.mousePressed(changeBkgd);
}


function draw() {
  clear();
  background(bkgd);
}


function changeBkgd() {
  let cursorStyle = cursor(HAND);
  bkgd = color(random(0, 205),(0, 100), (0, 155));
  if(mouseX && mouseY < canvas) { 
     mouseover(cursorStyle);
  }
}

function changeEyes() {
  this.style('background-color', '#495057');
}

function changeShirt() {
  this.style('background-color', '#55C29C');
}

function changeEarring() {
  this.style('border-color', '#FFA6AA');
}
