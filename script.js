/**
 * @type  {HTMLCanvasElement}
 */
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

document.addEventListener("resize", (e) => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const mouse = {
  x: null,
  y: null,
};

addEventListener("mouseover", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Cursor {
  constructor(x, y) {
    this.r = 30;
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.delay = 0.09;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "#a29bfe";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    this.x += dx * this.delay;
    this.y += dy * this.delay;
  }

  setTargetPosition(x, y) {
    this.targetX = x;
    this.targetY = y;
  }
}

const cursor = new Cursor(mouse.x, mouse.y);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  cursor.setTargetPosition(mouse.x, mouse.y);
  cursor.update();
  cursor.draw();
}

animate();
