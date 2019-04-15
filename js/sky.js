function Sky(option) {
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.skyDis = option.skyDis;

    this.skySpeed = 2;
};
Sky.prototype = {
    constructor: Sky,
    drawSky: function () {
        this.skyDis -= this.skySpeed;
        this.ctx.drawImage(this.skyImg, this.skyDis, 0);
        if(this.skyDis <= -this.skyImg.width){
            this.skyDis += 2*this.skyImg.width;
        }
    }
}