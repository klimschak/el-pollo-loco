let canvas;
let world;


function initPollo() {
   canvas = document.getElementById("canvas");
   world = new World(canvas);

   console.log('My character is', world.character)
   console.log('My enemy is', world.enemies)

}