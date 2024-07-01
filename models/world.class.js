class World {
   character = new Character();
   enemies = [
      new Chicken(),
      new Chicken(),
      new Chicken()
   ];
   
   clouds = [
      new Cloud( )
   ]; 

   backgroundObjects = [
      new BackgroundObject('/../img/5_background/layers/air.png', 0),
      new BackgroundObject('/../img/5_background/layers/3_third_layer/1.png', 0),
      new BackgroundObject('/../img/5_background/layers/2_second_layer/1.png', 0),
      new BackgroundObject('/../img/5_background/layers/1_first_layer/1.png', 0),
      
   ];
   canvas;
   ctx;
   keyboard;



   constructor(canvas, keyboard){
      this.ctx= canvas.getContext('2d');
      this.canvas = canvas;
      this.keyboard = keyboard;
      this.draw();
      this.setWorld();
   }

   setWorld(){
      this.character.world = this;
   }

   draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      
      this.addObjectsToMap(this.backgroundObjects);
      this.addObjectsToMap(this.clouds);
      this.addObjectsToMap(this.enemies);
      this.addToMap(this.character);

      let self = this;
      requestAnimationFrame(function () {
         self.draw();
         
      });
   }

   addObjectsToMap(objects){
      objects.forEach(o => {
         this.addToMap(o);
      }); 
   }

   addToMap(mo) {
      if (mo.otherDirection) {
         this.ctx.save(); // Speichert den aktuellen Zustand des Canvas-Kontexts
         this.ctx.translate(mo.width, 0); // Verschiebt den Ursprung des Canvas-Kontexts nach rechts um die Breite des Bildes
         this.ctx.scale(-1, 1); // Spiegelt den Canvas-Kontext horizontal
         mo.x = mo.x * -1; // Invertiert die x-Koordinate des Objekts
      }
   
      // Zeichnet das Bild des Objekts auf dem Canvas
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
   
      if (mo.otherDirection) {
         mo.x = mo.x * -1; // Stellt die ursprüngliche x-Koordinate des Objekts wieder her
   
         // Zeichne etwas zur Visualisierung vor restore
         this.ctx.fillStyle = 'red';
         this.ctx.fillRect(0, 0, 10, 10);
   
         // Verzögerung einfügen, um den Zustand vor restore länger sichtbar zu machen
         setTimeout(() => {
            this.ctx.restore(); // Stellt den gespeicherten Zustand des Canvas-Kontexts wieder her
   
            // Zeichne etwas zur Visualisierung nach restore
            this.ctx.fillStyle = 'blue';
            this.ctx.fillRect(20, 0, 10, 10);
         }, 3000); // Verzögerung von 100 Millisekunden
      }
   }
}
   