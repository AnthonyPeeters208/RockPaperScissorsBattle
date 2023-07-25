document.getElementById("test").innerHTML = "Test succeeded :)";

// Change battle canvas style
let canvas_dim = Math.min(screen.width, screen.height) * 0.7;
console.log("Canvas dim: " + canvas_dim);
const battle_canvas = document.getElementById("battlecanvas");
battle_canvas.width = canvas_dim;
battle_canvas.height = canvas_dim;

// Draw on the canvas
const ctx = battle_canvas.getContext("2d");
const rock_emoji = "🪨";
const paper_emoji = "📃";
const scissor_emoji = "✂️"

// temp test
ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 50, 50);

// emoji test
function draw() {
    const ctx = document.getElementById("battlecanvas").getContext("2d");
    ctx.font = "48px serif";
    ctx.fillText(rock_emoji, 100, 150);
    ctx.fillText(paper_emoji, 150, 150);
    ctx.fillText(scissor_emoji, 200, 150);
}
draw();
