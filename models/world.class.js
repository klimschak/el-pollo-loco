class World {

   level = level1;

   character = new Character(); // Ändern zu einer einzelnen Instanz

   ctx;
   canvas;
   keyboard;
   scroll_x;
   statusBar = new StatusBar();

   throwableObjects = [ ];

   constructor(canvas, keyboard) {
      this.ctx = canvas.getContext('2d');
      this.canvas = canvas;
      this.keyboard = keyboard;
      this.setWorld();
      this.draw();
      this.run();
   }

   setWorld() {
      this.character.world = this;
   }

   draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.translate(this.scroll_x, 0);

      this.addObjectsToMap(this.level.backgroundObjects);

      //Space for fixed Objects
      this.ctx.translate(-this.scroll_x, 0);
      this.addToMap(this.statusBar);
      this.ctx.translate(this.scroll_x, 0);

      this.addObjectsToMap(this.level.clouds);
      this.addToMap(this.character); // Anpassen, um die Charakterinstanz zu zeichnen
      this.addObjectsToMap(this.level.enemies);
      this.addObjectsToMap(this.throwableObjects);


      this.ctx.translate(-this.scroll_x, 0);

      let self = this;
      requestAnimationFrame(function () {
         self.draw();
      });
   }

   run() {
      setInterval(() => {
         this.checkCollisions();
         this.checkThrowObjects();
      }, 1000 / 4);
   }

   checkThrowObjects() {
      if (this.keyboard.D) {
         let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100 );
         this.throwableObjects.push(bottle);

      }

   }
   checkCollisions() {
      this.level.enemies.forEach((enemy) => {
         if (this.character.isColliding(enemy)) {
            this.character.hit(); 
            this.statusBar.setPercentage(this.character.energy);
         }
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
   mirrorImage(movObj) {
      this.ctx.save();
      this.ctx.translate(movObj.width, 0);
      this.ctx.scale(-1, 1);
      movObj.x = movObj.x * -1;
   }
   mirrorImageBack(movObj) {
      movObj.x = movObj.x * -1;
      this.ctx.restore();
   }
}
