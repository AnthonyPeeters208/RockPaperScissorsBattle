class RPSObject{
    constructor(x, y, vx, vy) {
        this.x = x;     // x coord
        this.y = y;     // y coord
        this.vx = vx;   // x-axis speed
        this.vy = vy;   // y-axis speed
        this.text = "null"; // textual representation of the object
    }
    move(heightbound, widthbound){
        // moves the object one frame
        // bound: the end bound on x an y axis,
        // e.g if bound=300 then the object can move on X[0-300] and Y[0-300]
        this.x += this.vx;
        this.y += this.vy;
        if(this.x + this.vx > widthbound || this.x + this.vx < 0){
            // move opposite direction
            this.vx = -this.vx;
        }
        if(this.y + this.vy > heightbound || this.y + this.vy < 0){
            // move opposite direction
            this.vy = -this.vy;
        }
    }

    draw(ctx){
        // Draw itself, using 2D context from canvas
        ctx.fillText(this.text, this.x, this.y);
    }
}

export {RPSObject}