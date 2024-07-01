class Chicken extends MovableObject {
   y = 350;
   height = 80;
   width = 80;
   IMAGES_WALKING =[
      '/../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
      '/../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
      '/../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
   ];



   constructor (){
      super().loadImage('/../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
      this.loadImages(this.IMAGES_WALKING);
      this.x = 200 + Math.random() * 500;
      this.animate();
      this.speed = 0.06 + Math.random() * 0.3;
   }

   animate() {
      this.moveLeft();

      setInterval(() => {
         let i = this.currentImage % this.IMAGES_WALKING.length;
         let path = this.IMAGES_WALKING[i];
         this.img = this.imageCache[path];
         this.currentImage++;
         
      }, 100);

   }

  
}

