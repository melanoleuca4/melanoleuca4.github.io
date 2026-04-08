// Planets and orbts
let orbitRadiusA = 40, planetRadiusA = 8, angleA = 0;      // Mercury
let orbitRadiusB = 60, planetRadiusB = 12, angleB = 0;     // Venus
let orbitRadiusC = 80, planetRadiusC = 14, angleC = 0;     // Earth
let orbitRadiusZ = 15, moonRadius = 4, angleZ = 0;         // Moon
let orbitRadiusD = 100, planetRadiusD = 7, angleD = 0;     // Mars
let orbitRadiusE = 140, planetRadiusE = 30, angleE = 0;    // Jupiter
let orbitRadiusF = 200, planetRadiusF = 25, angleF = 0;    // Saturn
let ring1Radius = 25, ring2Radius = 35;
let orbitRadiusG = 250, planetRadiusG = 14, angleG = 0;    // Uranus
let orbitRadiusH = 280, planetRadiusH = 12, angleH = 0;    // Neptune

let sunX, sunY;

function setup() {
  let canvas = createCanvas(400,400);
  canvas.parent('p5-container');
  sunX = width / 2;
  sunY = height / 2;
  background('black');
}

function draw() {
  background('black');

  // Sun
  fill('yellow');
  circle(sunX, sunY, 30);

  // Mercury
  angleA += 0.1;
  let x1 = orbitRadiusA * cos(angleA) + sunX;
  let y1 = orbitRadiusA * sin(angleA) + sunY;
  fill('gray');
  circle(x1, y1, planetRadiusA);

  // Venus
  angleB += 0.04;
  let x2 = orbitRadiusB * cos(angleB) + sunX;
  let y2 = orbitRadiusB * sin(angleB) + sunY;
  fill('orange');
  circle(x2, y2, planetRadiusB);

  // Earth
  angleC += 0.0241;
  let x3 = orbitRadiusC * cos(angleC) + sunX;
  let y3 = orbitRadiusC * sin(angleC) + sunY;
  fill(47, 106, 105);
  circle(x3, y3, planetRadiusC);

  // Moon
  angleZ += 0.09;
  let xMoon = orbitRadiusZ * cos(angleZ) + x3;
  let yMoon = orbitRadiusZ * sin(angleZ) + y3;
  fill('gray');
  circle(xMoon, yMoon, moonRadius);

  // Mars
  angleD += 0.013;
  let x4 = orbitRadiusD * cos(angleD) + sunX;
  let y4 = orbitRadiusD * sin(angleD) + sunY;
  fill('red');
  circle(x4, y4, planetRadiusD);

  // Jupiter
  angleE += 0.002;
  let x5 = orbitRadiusE * cos(angleE) + sunX;
  let y5 = orbitRadiusE * sin(angleE) + sunY;
  fill(176, 127, 53);
  circle(x5, y5, planetRadiusE);

  // Saturn
  angleF += 0.0008;
  let x6 = orbitRadiusF * cos(angleF) + sunX;
  let y6 = orbitRadiusF * sin(angleF) + sunY;
  fill(206, 184, 184);
  circle(x6, y6, planetRadiusF);

  // Saturn rings
  push();
  noFill();
  stroke(216, 174, 109);
  strokeWeight(2);
  circle(x6, y6, ring1Radius);
  pop();

  push();
  noFill();
  stroke(172, 139, 88);
  strokeWeight(3);
  circle(x6, y6, ring2Radius);
  pop();

  // Uranus
  angleG += 0.0003;
  let x7 = orbitRadiusG * cos(angleG) + sunX;
  let y7 = orbitRadiusG * sin(angleG) + sunY;
  fill(172, 229, 238);
  circle(x7, y7, planetRadiusG);

  // Neptune
  angleH += 0.00015;
  let x8 = orbitRadiusH * cos(angleH) + sunX;
  let y8 = orbitRadiusH * sin(angleH) + sunY;
  fill(46, 93, 157);
  circle(x8, y8, planetRadiusH);
}

