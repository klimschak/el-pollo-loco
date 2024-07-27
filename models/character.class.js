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

   IMAGES_DEAD = [
      'img/2_character_pepe/5_dead/D-51.png',
      'img/2_character_pepe/5_dead/D-52.png',
      'img/2_character_pepe/5_dead/D-53.png',
      'img/2_character_pepe/5_dead/D-54.png',
      'img/2_character_pepe/5_dead/D-55.png',
      'img/2_character_pepe/5_dead/D-56.png',
      'img/2_character_pepe/5_dead/D-57.png',
   ];

   IMAGES_HURT = [
      'img/2_character_pepe/4_hurt/H-41.png',
      'img/2_character_pepe/4_hurt/H-42.png',
      'img/2_character_pepe/4_hurt/H-43.png',
   ];



   constructor() {
      super();
      this.loadImage('img/2_character_pepe/2_walk/W-21.png');
      this.loadMultipleImages(this.IMAGES_WALKING);
      this.loadMultipleImages(this.IMAGES_JUMPING);
      this.loadMultipleImages(this.IMAGES_DEAD);
      this.loadMultipleImages(this.IMAGES_HURT);
      this.animate();
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
         if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
         }
         this.world.scroll_x = -this.x + 100;
      }, 1000 / 30);

      setInterval(() => {
         if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
         }
         else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
         }
         else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
         }
         else if (!this.isHurt() || !this.isAboveGround() || !this.isDead()){
            
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
               this.playAnimation(this.IMAGES_WALKING)
            }
         }

      }, 60);
   }

}    