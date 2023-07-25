document.getElementById("test").innerHTML = "Test succeeded :)";

// Change battle canvas style
let canvas_dim = Math.min(screen.width, screen.height) * 0.7;
console.log("Canvas dim: " + canvas_dim);
let battle_canvas = document.getElementById("battlecanvas");
battle_canvas.width = canvas_dim;
battle_canvas.height = canvas_dim;