// Variables to store HTML elements
let previewEl = document.getElementById("preview");
let redEl = document.getElementById("red");
let greenEl = document.getElementById("green");
let blueEl = document.getElementById("blue");
let rgbEl = document.getElementById("rgb");
let yellowboxEl = document.getElementById("yellowbox");

// Event Listener
redEl.addEventListener("input", rgbPreview);
greenEl.addEventListener("input", rgbPreview);
blueEl.addEventListener("input", rgbPreview);

function rgbPreview() {
  //Input
  let red = +redEl.value;
  let green = +greenEl.value;
  let blue = +blueEl.value;

  // Validate colors ( constrain colors between 0 - 255)
  // Check red
  if (red < 0) {
    red = 0;
    redEl.value = 0;
  } else if (red > 255) {
    red = 255;
    redEl.value = 255;
  }
  // Check green
  if (green < 0) {
    green = 0;
    greenEl.value = 0;
  } else if (green > 255) {
    green = 255;
    greenEl.value = 255;
  }
  // Check blue
  if (blue < 0) {
    blue = 0;
    blueEl.value = 0;
  } else if (blue > 255) {
    blue = 255;
    blueEl.value = 255;
  }
  //Process
  var rgb = `rgb(${red}, ${green}, ${blue})`;
  //Output
  rgbEl.innerHTML = rgb;
  document.getElementById("yellowbox").style.background = rgb;
}

//Black Button
//Event listener
document.getElementById("black").addEventListener("click", black);

function black() {
  //process
  var black = `rgb(0, 0, 0)`;
  //output
  document.getElementById("rgb").innerHTML = black;
  document.getElementById("yellowbox").style.background = "black";
}

//white button
//event listener
document.getElementById("white").addEventListener("click", white);

function white() {
  //process
  var white = `rgb(255, 255, 255)`;

  //Output
  document.getElementById("rgb").innerHTML = white;
  document.getElementById("yellowbox").style.background = "white";
}

// Event listener
document.getElementById("height").addEventListener("input", changeSize);
document.getElementById("width").addEventListener("input", changeSize);

function changeSize() {
  // Input
  let width = +document.getElementById("width").value;
  let height = +document.getElementById("height").value;

  // Width
  if (width < 50) {
    width = 50;
    width.value = 50;
  } else if (width > 400) {
    width = 400;
    width.value = 400;
  }

  // Height
  if (height < 50) {
    height = 50;
    height.value = 50;
  } else if (height > 200) {
    height = 200;
    height.value = 200;
  }

  // Output
  yellowboxEl.style.width = `${width}px`;
  yellowboxEl.style.height = `${height}px`;
}
