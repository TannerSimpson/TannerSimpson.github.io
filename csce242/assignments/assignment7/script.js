// Function to change the image when the button is pressed
const changeImage = () => {
    const imageElement = document.getElementById("image1");

    // Check the current source and change it accordingly
    if (imageElement.src.includes("image1.webp")) {
        imageElement.src = "images/image2.webp";
    } else {
        imageElement.src = "images/image1.webp";
    }
};

// Function to rotate the image based on the slider value
const rotateImage = () => {
    const rotatingImage = document.getElementById("rotatingImage");
    const rotationSlider = document.getElementById("rotationSlider");
    const imageDescription = document.getElementById("imageDescription");

    rotatingImage.style.transform = `rotate(${rotationSlider.value}deg)`;
};

// Function to add stars into the column each time the button is pressed
const addStars = () => {
    const starPlayground = document.getElementById("star-playground");

    // Create a new star image element
    const star = document.createElement("img");
    star.src = "images/starimage.png";
    star.alt = "Star";
    star.classList.add("star");

    // Append the star to the star playground
    starPlayground.appendChild(star);
};

document.getElementById("btn-change-image").onclick = changeImage;
document.getElementById("rotationSlider").oninput = rotateImage;
document.getElementById("btn-add-star").onclick = addStars;