import {RPSObject} from "./RPSObject.js";

class Paper extends RPSObject{
    constructor(x, y, vx, vy) {
        super(x, y, vx, vy);
        this.text = "📃";
    }
}

export {Paper}