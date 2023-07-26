import {RPSObject} from "./RPSObject.js";

class Scissors extends RPSObject{
    constructor(x, y, vx, vy) {
        super(x, y, vx, vy);
        this.text = "✂️";
    }
}

export {Scissors}