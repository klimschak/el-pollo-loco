class Chicken extends MovableObject {
   y = 340 ;
   height = 90;
   width = 90;
   speed = 0.15 + Math.random() * 0.3;
   IMAGES_WALKING = [
      'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
      'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
      'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
   ];
   constructor(){
      super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
      
      this.x = 200 + Math.random()*500
      this.loadMultipleImages(this.IMAGES_WALKING);
      this.animate();
   }


   animate() {
      setInterval(() => {
         this.moveLeft(); 
      }, 1000 / 60)

      setInterval(() => {    
         this.playAnimation(this.IMAGES_WALKING);
      }, 1000 / 7);
   }


}