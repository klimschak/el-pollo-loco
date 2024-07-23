class World {

   level = level1;

   character = new Character(); // Ändern zu einer einzelnen Instanz

   ctx;
   canvas;
   keyboard; 
   scroll_x;

   constructor(canvas, keyboard) {
      this.ctx = canvas.getContext('2d');
      this.canvas = canvas;
      this.keyboard = keyboard;
      this.setWorld();
      this.draw();
   }

   setWorld() {
      this.character.world = this;
   }

   draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.translate(this.scroll_x, 0);

      this.addObjectsToMap(this.level.backgroundObjects);
      this.addObjectsToMap(this.level.clouds);  
      this.addObjectsToMap(this.level.enemies);
      this.addToMap(this.character); // Anpassen, um die Charakterinstanz zu zeichnen

      this.ctx.translate(-this.scroll_x, 0);

      let self = this; 
      requestAnimationFrame(function() {
         self.draw();
      });
   }

   addObjectsToMap(objects) {
      objects.forEach(object => {
         this.addToMap(object);
      });
   }

   addToMap(movObj) {
      if (movObj.mirrored) {
         this.mirrorImage(movObj)
      }
      movObj.draw(this.ctx);
      movObj.drawFrame(this.ctx);


      if (movObj.mirrored) {
         this.mirrorImageBack(movObj)
      };
   }
   mirrorImage(movObj){
      this.ctx.save();
      this.ctx.translate(movObj.width, 0);
      this.ctx.scale(-1,1);
      movObj.x = movObj.x * -1;
   }
   mirrorImageBack(movObj){
      movObj.x = movObj.x * -1;
      this.ctx.restore();
   }
}
