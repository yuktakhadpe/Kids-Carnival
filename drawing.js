// const canvas = document.getElementById("drawingCanvas");
// const ctx = canvas.getContext("2d");

// let drawing = false;
// let currentColor = "black"; 

// canvas.addEventListener("mousedown", startDrawing);
// canvas.addEventListener("mouseup", stopDrawing);
// canvas.addEventListener("mousemove", draw);

// function startDrawing(e) {
//   drawing = true;
//   draw(e);
// }

// function stopDrawing() {
//   drawing = false;
//   ctx.beginPath();
// }

// function draw(e) {
//   if (!drawing) return;

//   ctx.lineWidth = 5;
//   ctx.lineCap = "round";
//   ctx.strokeStyle = currentColor;

//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.moveTo(e.offsetX, e.offsetY);
// }


// function setColor(color) {
//   currentColor = color;
//   document.getElementById("status").textContent = `Selected color: ${color}`;
// }

// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   document.getElementById("status").textContent = "Canvas cleared!";
// }

// function saveDrawing() {
//   const link = document.createElement("a");
//   link.download = "my_drawing.png";
//   link.href = canvas.toDataURL();
//   link.click();
//   document.getElementById("status").textContent = "Drawing saved!";
// }

// function restartGame() {
//   clearCanvas();
//   document.getElementById("status").textContent = "Pick a color and start drawing!";
// }

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = "black"; 

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

function startDrawing(e) {
  drawing = true;
  draw(e);
}

function stopDrawing() {
  drawing = false;
  ctx.beginPath();
}

function draw(e) {
  if (!drawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = currentColor;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}


function setColor(color) {
  currentColor = color;
  document.getElementById("status").textContent = `Selected color: ${color}`;
}

function useEraser() {
  currentColor = "white";
  document.getElementById("status").textContent = "Eraser selected!";
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("status").textContent = "Canvas cleared!";
}

function saveDrawing() {
  const link = document.createElement("a");
  link.download = "my_drawing.png";
  link.href = canvas.toDataURL();
  link.click();
  document.getElementById("status").textContent = "Drawing saved!";
}

function restartGame() {
  clearCanvas();
  document.getElementById("status").textContent = "Pick a color and start drawing!";
}
