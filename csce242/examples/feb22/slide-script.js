//code is messed up check example


const slideForward = () => {
    //at the end of the list of images
    if(getCurrentImage().nextElementSibling == null){
        slide(document.querySelector("#preview img"));
    } else {
        slide(getCurrentImage().nextElementSibling);
    }
}

const slideBackward = () => {
    //at the beginning of the list of images
    if(getCurrentImage().previousElementSibling == null){
        slide(document.querySelector("#preview :last-child"));
    } else {
        slide(getCurrentImage().previousElementSibling);
    }
}

const slide = (nextImage) => {
    //const currentImage = document.querySelector("#preview :not(hidden)");
    currentImage.classList.remove("hidden");
    nextImage.classList.remove("hidden");
};

const getCurrentImage = () => {
    return document.querySelector("#preview :not(.hidden)");
}

document.getElementById("forward-arrow").onclick = slideForward;
document.getElementById("backwar-arrow").onclick = slideBackward;

document.querySelectorAll("#thumbs img").forEach((img, index)=>{
    img.onclick = () => {
        slide(document.querySelector(`#preview :nth-child(${index+1})`));
    };
})