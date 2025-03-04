document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const mouse = { x: null, y: null, radius: 100 };
    let backgroundColor = 'black';

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    const toggleButton = document.getElementById('toggle-background');
    toggleButton.addEventListener('click', () => {
        backgroundColor = backgroundColor === 'black' ? 'white' : 'black';
        toggleButton.style.backgroundColor = backgroundColor === 'black' ? 'white' : 'black';
    });

    function draw() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the background color
    }

    function loop() {
        draw();
        requestAnimationFrame(loop);
    }

    loop();
});
