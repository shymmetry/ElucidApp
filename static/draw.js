var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var curTool = "pencil";
var curColor = "black";
var isDrawing = false;

var lastX;
var lastY;

init();

function init() {
  canvas.width = window.innerWidth - 18;
  canvas.addEventListener('mouseup', onMouseUp, false);
  canvas.addEventListener('mousedown', onMouseDown, false);
  document.onmousemove = onMouseMove;
  
  ctx.strokeStyle = curColor;
}

function draw(x, y) {
  if (curTool === "pencil") {
    ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.stroke();
  }
  else if (curTool === "paintbrush") {
    ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.stroke();
  }
  else if (curTool === "eraser") {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.closePath();
	ctx.stroke();
	ctx.strokeStyle = curColor;
  }
}

function onMouseDown(e) {
  isDrawing = true;
  lastX = e.pageX - canvas.offsetLeft;
  lastY = e.pageY - canvas.offsetTop;
}

function onMouseUp(e) {
  isDrawing = false;
}

function onMouseMove(e) {
  if (isDrawing) {
    var x = e.pageX - canvas.offsetLeft;
	var y = e.pageY - canvas.offsetTop;
	
	draw(x, y);
	
	lastX = x;
	lastY = y;
  }
}

function getPencil() {
  curTool = "pencil";
}

function getEraser() {
  curTool = "eraser";
}

function getPaintbrush() {
  curTool = "paintbrush";
}

function clearPage() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
}

function color(color) {
  curColor = color;
  ctx.strokeStyle = color;
}

