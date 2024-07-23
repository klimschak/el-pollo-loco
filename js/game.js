let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character)
} 

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { 
        console.log(event);
        keyboard.RIGHT = true;
        console.log(keyboard.RIGHT);
    }
    if (event.key === 'ArrowLeft') {
        console.log(event);
        keyboard.LEFT = true;
    }
    if (event.key === 'ArrowUp') {
        console.log(event);
        keyboard.UP = true;
    }
    if (event.key === 'ArrowDown') {
        console.log(event);
        keyboard.Down = true;
    }
    if (event.code === 'Space') {
        console.log(event);
        keyboard.SPACE = true;
    }
}); 

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') { 
        console.log(event);
        keyboard.RIGHT = false;
        console.log(keyboard.RIGHT);
    }
    if (event.key === 'ArrowLeft') {
        console.log(event);
        keyboard.LEFT = false;
    }
    if (event.key === 'ArrowUp') {
        console.log(event);
        keyboard.UP = false;
    }
    if (event.key === 'ArrowDown') {
        console.log(event);
        keyboard.DOWN = false;
    }
    if (event.code === 'Space') {
        console.log(event);
        keyboard.SPACE = false;
    }
});