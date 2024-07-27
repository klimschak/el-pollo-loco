class DrawableObject{
   img;
   imageCache = {};
   currentImage = 0;
   x = 350;
   y = 200;
   width = 100;
   height = 150;
   
   loadImage(path) {
      this.img = new Image();
      this.img.src = path;
   };


   draw(ctx) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
   };

   drawFrame(ctx){
      if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
         ctx.beginPath();
         ctx.lineWidth = '5';
         ctx.strokeStyle = 'green';
         ctx.rect(this.x, this.y, this.width, this.height);
         ctx.stroke(); 
      }

   };

   loadMultipleImages(arr) {
      arr.forEach((path) => {
         let img = new Image();
         img.src = path;
         this.imageCache[path] = img;
      });
   };
}
