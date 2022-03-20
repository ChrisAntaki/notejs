// Style body.
document.body.style.margin = 0;
document.body.style.overflow = "hidden";

// Create canvas.
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.append(canvas);

// Handle resizes.
window.onresize = function () {
  canvas.width = Math.floor(window.innerWidth);
  canvas.style.width = Math.floor(window.innerWidth);
  canvas.height = Math.floor(window.innerHeight);
  canvas.style.height = Math.floor(window.innerHeight);
};
window.onresize();

// Render.
function render() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const strokes = ["#00aaff", "#00ffaa"];
  ctx.strokeStyle = strokes[Math.floor(Math.random() * strokes.length)];
  ctx.beginPath();
  ctx.arc(Math.random() * width, Math.random() * height, 50, 0, 2 * Math.PI);
  ctx.stroke();

  requestAnimationFrame(render);
}
render();
