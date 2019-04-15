function Land(option){
    this.ctx = option.ctx;
    this.landImage = option.landImage;
    this.landDis = option.landDis;

    this.speed = 2;
}
Land.prototype = {
    constructor:Land,
    drawLand:function(){
        var landH = this.landImage.height;
        var landW = this.landImage.width;
        this.ctx.drawImage(this.landImage,this.landDis,c.height - landH);
        this.landDis -= this.speed;
        if(this.landDis <= -landW){
            this.landDis += 4*landW;
        }
    }
}