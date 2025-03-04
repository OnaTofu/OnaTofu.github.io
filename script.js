document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggleButton");
    const image = document.getElementById("toggleImage");
    let isBlack = false;


    button.addEventListener("click", function () {
        isBlack = !isBlack; // Toggle state

        // Change background color
        document.body.style.backgroundColor = isBlack ? "black" : "white";

        // Change image
        image.src = isBlack ? "imgs/blackstar.png" : "imgs/whitestar.png";

        // Debugging: Log current state
        console.log("Background is now:", document.body.style.backgroundColor);
        console.log("Image source is now:", image.src);
    });
});
