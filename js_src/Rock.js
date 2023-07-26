import {RPSObject} from "./RPSObject.js";

class Rock extends RPSObject{
    constructor(x, y, vx, vy) {
        super(x, y, vx, vy);
        this.text = "🪨";
    }
}

export {Rock}