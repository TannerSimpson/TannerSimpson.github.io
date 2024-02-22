const slide = () => {
    //find the child of slideshow that doesn't contain the class of hidden
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    let nextImagae = currentImage.nextElementSibling;

    //on the last
    if (nextImagae == null) {
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImagae.classList.remove("hidden");
};

setInterval(slide, 1000);