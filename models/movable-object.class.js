class MovableObject extends DrawableObject {
   speed = 0.15;
   mirrored = false;
   speedY = 0;
   acceleration = 3;
   energy = 100;
   lastHit = 0;

   applyGravity() {
      setInterval(() => {
         if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
         }
      }, 1000 / 25);
   };

   isAboveGround() {
      if (this instanceof ThrowableObject)
      return true;
      else {
         return this.y < 150;
      }
   }  ;

   jump() {
      this.speedY = 30;
   };


   isColliding(movObj){
      return this.x + this.width > movObj.x &&
      this.y + this.height > movObj.y &&
      this.x < movObj.x &&
      this.y < movObj.y + movObj.height;
   };

   hit() {
      this.energy -= 5;
      if (this.energy < 0) {
         this.energy = 0;
      } else {
         this.lastHit = new Date().getTime();

      }
   }

   isHurt(){
      let timepassed = new Date().getTime() - this.lastHit;
      timepassed = timepassed / 1000;
      return timepassed < 1;
   }

   isDead (){
      return this.energy <= 0;
   }

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