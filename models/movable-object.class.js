class MovableObject {
   x = 350;
   y = 200;
   img;
   imageCache = {};
   width = 100;
   height = 150;
   currentImage = 0;
   speed = 0.15;
   mirrored = false;
   speedY = 0;
   acceleration = 3;

   applyGravity() {
      setInterval(() => {
         if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
         }
      }, 1000 / 25);
   };

   isAboveGround() {
      return this.y < 150;
   };

   jump() {
      this.speedY = 30;
   };

   loadImage(path) {
      this.img = new Image();
      this.img.src = path;
   };

   loadMultipleImages(arr) {
      arr.forEach((path) => {
         let img = new Image();
         img.src = path;
         this.imageCache[path] = img;
      });
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


   moveRight() {
      this.x += this.speed;
   };

   moveLeft() {
      this.x -= this.speed;

   };
   playAnimation(images) {
      let i = this.currentImage % images.length;
      let path = images[i];
      this.img = this.imageCache[path];
      this.currentImage++;
   };
}  