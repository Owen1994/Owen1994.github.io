function Pipe(option) {
    this.ctx = option.ctx;
    this.pipeDis = option.pipeDis;
    this.pipeImg1 = option.pipeImg1;
    this.pipeImg2 = option.pipeImg2;

    this.pipeW = this.pipeImg1.width;
    this.pipeH = this.pipeImg1.height;
    this.space = 150;
    this.speed = 2;

    this.getY();
}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function () {
        this.ctx.drawImage(this.pipeImg1, this.pipeDis, this.topY);
        //绘制路径
        this.ctx.rect(this.pipeDis, this.topY,this.pipeW,this.pipeH);

        this.ctx.drawImage(this.pipeImg2, this.pipeDis, this.bottomY);        
        //绘制路径
        this.ctx.rect(this.pipeDis, this.bottomY,this.pipeW,this.pipeH);
        this.pipeDis -= this.speed;
        if (this.pipeDis < -3 * this.pipeW) {
            this.getY();
            this.pipeDis += 6 * 3 * this.pipeW;
        }
    },
    getY: function () {
        this.topY = -(Math.random() * 250 + 120);
        this.bottomY = this.topY + this.pipeH + this.space;
    }
}