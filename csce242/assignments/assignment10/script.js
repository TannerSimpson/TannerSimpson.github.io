const slide = () => {
    const currentText = document.querySelector("#slideshow :not(.hidden)");
    let nextText = currentText.nextElementSibling;

    if (nextText == null) {
        nextText = document.querySelector("#slideshow :first-child");
    }

    currentText.classList.add("hidden");
    nextText.classList.remove("hidden");
};

let images = [
    { src: "images/mountain-lake.jpg", caption: '<a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a> on Freepik' },
    { src: "images/golden.jpg", caption: '<a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' },
    { src: "images/garden.jpg", caption: '<a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' },
    { src: "images/small-house.jpg", caption: '<a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' },
    { src: "images/snow.jpg", caption: '<a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' }
];

function imageCarousel() {
    let currentIndex = 0;

    function displayCurrentImage() {
        images.forEach((image, index) => {
            let img = document.querySelector(`#images img:nth-child(${index + 1})`);
            let caption = document.querySelector(`.caption p:nth-child(${index + 1})`);

            if (index === currentIndex) {
                img.classList.remove("hidden");
                caption.classList.remove("hidden");
            } else {
                img.classList.add("hidden");
                caption.classList.add("hidden");
            }
        });

        currentIndex = (currentIndex + 1) % images.length;
    }

    displayCurrentImage();

    setInterval(displayCurrentImage, 2000);
}

imageCarousel();
setInterval(slide, 2000);