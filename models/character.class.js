class Character extends MovableObject {
   y = 150;
   x = 30;
   height = 300;
   width = 150
   world;
   speed = 10;
   walking_sound = new Audio('audio/walking.mp3');
   IMAGES_WALKING = [
      'img/2_character_pepe/2_walk/W-21.png',
      'img/2_character_pepe/2_walk/W-22.png',
      'img/2_character_pepe/2_walk/W-23.png',
      'img/2_character_pepe/2_walk/W-24.png',
      'img/2_character_pepe/2_walk/W-25.png',
      'img/2_character_pepe/2_walk/W-26.png'
   ];
   IMAGES_JUMPING = [
      'img/2_character_pepe/3_jump/J-31.png',
      'img/2_character_pepe/3_jump/J-32.png',
      'img/2_character_pepe/3_jump/J-33.png',
      'img/2_character_pepe/3_jump/J-34.png',
      'img/2_character_pepe/3_jump/J-35.png',
      'img/2_character_pepe/3_jump/J-36.png',
      'img/2_character_pepe/3_jump/J-37.png',
      'img/2_character_pepe/3_jump/J-38.png',
      'img/2_character_pepe/3_jump/J-39.png'
   ];




   constructor() {
      super().loadImage('img/2_character_pepe/2_walk/W-21.png');
      this.loadMultipleImages(this.IMAGES_WALKING);
      this.loadMultipleImages(this.IMAGES_JUMPING);
      this.animate();
            setInterval(() => {   
         if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING)
         } 
   
      }, 60);
      this.applyGravity();
   };

   animate() {
      setInterval(() => {

         this.walking_sound.pause();
         
         if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.walking_sound.play();
            this.mirrored = false;

         }
         if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.walking_sound.play();
            this.mirrored = true;

         }
         if(this.world.keyboard.SPACE && !this.isAboveGround()){
            this.jump(); 
         }
         this.world.scroll_x = -this.x + 100;
      }, 1000 / 30);

      setInterval(() => {
         if(this.isAboveGround()){
            this.playAnimation(this.IMAGES_JUMPING);
         }
         else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING)
         }

      }, 60);
   }

}    