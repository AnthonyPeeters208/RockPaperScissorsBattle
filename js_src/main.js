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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function minusoneorone(){
    // randomly selects either -1 or 1
    let choice = getRandomInt(2);
    if(choice === 0){ return 1}
    else{ return -1}
}

let itemsRPS = [];

function calcFontsize(){
    // scale in proportion to the max size
    let maxfontsize = 48;
    let maxspawn  = document.getElementById("slider").max;
    let fontsize = Math.round(maxfontsize - (itemsRPS.length/maxspawn)*28);
    console.log(fontsize);
    return fontsize;
}
let fontSize = calcFontsize();


function spawnItems(){
    itemsRPS = [];  // clear all items
    let amount = document.getElementById("slidervalue").innerHTML;

    // 3x25% for each type, final 25% is random
    for(let j=0; j < amount; j++){
        let xspeed = minusoneorone() + (minusoneorone() * Math.random()) ;   // some number [-2, 2]
        let yspeed = minusoneorone() + (minusoneorone() * Math.random());

        if(j <= Math.floor(amount * 0.25)){
            itemsRPS.push(new Scissors(getRandomInt(canvas_dim), getRandomInt(canvas_dim), xspeed, yspeed));
        }
        else if(j <= Math.floor(amount * 0.5)){
            itemsRPS.push(new Paper(getRandomInt(canvas_dim), getRandomInt(canvas_dim), xspeed, yspeed));
        }
        else if(j <= Math.floor(amount * 0.75)){
            itemsRPS.push(new Rock(getRandomInt(canvas_dim), getRandomInt(canvas_dim), xspeed, yspeed));
        }
        else{
            // do a random spawn
            let choice = getRandomInt(3);
            if(choice === 0){itemsRPS.push(new Rock(getRandomInt(canvas_dim), getRandomInt(canvas_dim), xspeed, yspeed));}
            if(choice === 1){itemsRPS.push(new Paper(getRandomInt(canvas_dim), getRandomInt(canvas_dim), xspeed, yspeed));}
            if(choice === 2){itemsRPS.push(new Scissors(getRandomInt(canvas_dim), getRandomInt(canvas_dim), xspeed, yspeed));}
        }
    }
    updateAmounts();    // update
    fontSize = calcFontsize();
}

function updateAmounts(){
    let rocks = 0;
    let papers = 0;
    let scissors = 0;
    for(let i=0; i<itemsRPS.length; i++){
        if(itemsRPS[i] instanceof Rock){rocks+=1}
        else if(itemsRPS[i] instanceof Paper){papers+=1}
        else if(itemsRPS[i] instanceof Scissors){scissors+=1}
    }
    document.getElementById("rock_amount").innerHTML = rocks;
    document.getElementById("paper_amount").innerHTML = papers;
    document.getElementById("scissors_amount").innerHTML = scissors;
}




function moveAllItems(){
    const ctx = document.getElementById("battlecanvas").getContext("2d");
    ctx.clearRect(0, 0, canvas_dim, canvas_dim);
    ctx.font = fontSize + "px serif";
    console.log(ctx.font);
    ctx.textAlign = "center";   // put point in center

    for(let i=0; i<itemsRPS.length; i++){
        let currItem = itemsRPS[i];
        currItem.move(canvas_dim, canvas_dim);
        currItem.draw(ctx);
    }
    window.requestAnimationFrame(moveAllItems);
}
// Initial
spawnItems();
window.requestAnimationFrame(moveAllItems);

// map the start button
const startbutton = document.getElementById("startbutton");
startbutton.addEventListener("click", spawnItems);