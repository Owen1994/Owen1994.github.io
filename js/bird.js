function Bird(option) {
    this.ctx = option.ctx;
    this.canvasY = option.canvasY;
    this.canvasX = option.canvasX;
    this.birdImg = option.birdImg;

    this.birdSpeed = 0;
    this.index = 0;
    this.maxAngle = 45;
    this.maxSpeed = 0.48;
    this.g = 0.0003;
    this.birdW = option.birdImg.width/3;
    this.birdH = option.birdImg.height;
};
Bird.prototype = {
    constructor: Bird,
    drawBird: function (offsetTime) {
        var currentAngle = this.birdSpeed / this.maxSpeed * this.maxAngle;
        if (currentAngle > 45) {
            currentAngle = 45;
        }
        this.birdSpeed = this.birdSpeed + this.g * offsetTime;
        this.canvasY += this.birdSpeed * offsetTime + this.g * offsetTime * offsetTime / 2;
        //绘制小鸟
        this.ctx.save();
        this.ctx.translate(this.canvasX + this.birdW / 2, this.canvasY + this.birdH / 2);
        this.ctx.rotate(Math.PI / 180 * currentAngle);
        this.ctx.drawImage(this.birdImg, this.birdW * this.index, 0, this.birdW, this.birdH, -this.birdW / 2, -this.birdH / 2, this.birdW, this.birdH);
        this.ctx.restore();
        this.index++;
        if (this.index > 2) {
            this.index = 0;
        }
    }
}
