document.getElementById("test").innerHTML = "Test succeeded :)";

import {Rock} from "./Rock.js";
import {Paper} from "./Paper.js";
import {Scissors} from "./Scissors.js";

// Change battle canvas style
//let canvas_dim = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.9);
let canvas_dim = Math.round((Math.max(window.innerWidth, window.innerHeight) * 0.4));
console.log("Canvas dim: " + canvas_dim + "x" + canvas_dim);
const battle_canvas = document.getElementById("battlecanvas");
battle_canvas.width = canvas_dim;
battle_canvas.height = canvas_dim;

// map the start button
const startbutton = document.getElementById("startbutton");
function clickstartbutton(){
    alert("This doesn't work yet c:");
}
startbutton.addEventListener("click", clickstartbutton);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const itemsRPS = [];
itemsRPS.push(new Rock(getRandomInt(canvas_dim), getRandomInt(canvas_dim), 2, 2));
itemsRPS.push(new Rock(getRandomInt(canvas_dim), getRandomInt(canvas_dim), -2, 2));
itemsRPS.push(new Paper(getRandomInt(canvas_dim), getRandomInt(canvas_dim), -1, -1));
itemsRPS.push(new Paper(getRandomInt(canvas_dim), getRandomInt(canvas_dim), 1, 1));
itemsRPS.push(new Scissors(getRandomInt(canvas_dim), getRandomInt(canvas_dim), 1, 2));

function moveAllItems(){
    const ctx = document.getElementById("battlecanvas").getContext("2d");
    ctx.clearRect(0, 0, canvas_dim, canvas_dim);
    ctx.font = "48px serif";
    ctx.textAlign = "center";   // put point in center

    for(let i=0; i<itemsRPS.length; i++){
        let currItem = itemsRPS[i];
        currItem.move(canvas_dim, canvas_dim);
        currItem.draw(ctx);
    }
    window.requestAnimationFrame(moveAllItems);
}
window.requestAnimationFrame(moveAllItems); // initial call


