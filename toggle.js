document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-background');
    const toggleImage = document.getElementById('toggle-image'); // Make sure the img tag has this ID

    let backgroundColor = 'white';

    toggleButton.addEventListener('click', () => {
        backgroundColor = backgroundColor === 'black' ? 'white' : 'black';

        // Change the entire page background
        document.body.style.backgroundColor = backgroundColor;

        // Swap PNG source
        if (backgroundColor === 'black') {
            console.log(backgroundColor);
            toggleImage.src = 'imgs/whitestar.png'; // Image for black background
        } else {
            console.log(backgroundColor);
            toggleImage.src = 'imgs/blackstar.png'; // Image for white background
        }

        // Change text color for contrast
        const textColor = backgroundColor === 'black' ? 'white' : 'black';
        document.querySelectorAll('h2, p, a').forEach(element => {
            element.style.color = textColor;
        });


    });
});
