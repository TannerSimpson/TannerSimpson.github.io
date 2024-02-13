document.addEventListener('DOMContentLoaded', () => {
    showExercise(1);
});

const showExercise = exerciseNumber => {
    const exercises = document.querySelectorAll('.exercise-content');

    exercises.forEach(exercise => {
        if (exercise.id === `exercise${exerciseNumber}`) {
            exercise.style.display = 'flex';
        } else {
            exercise.style.display = 'none';
        }
    });
};

const handleCommand = () => {
    const input = document.getElementById('command-input').value.toLowerCase();
    const exercise1ImagesContainer = document.getElementById('exercise1-images');

    let imagePath = 'images/original.jpg'; 

    if (input === 'b') {
        imagePath = 'images/read.jpg';
    } else if (input === 'c') {
        imagePath = 'images/clown.jpg';
    } else if (input === 'p') {
        imagePath = 'images/birthday.jpg';
    } else if (input === 'r') {
        imagePath = 'images/rain.jpg';
    } else if (input === 's') {
        imagePath = 'images/shovel.jpg';
    } else if (input === 'w') {
        imagePath = 'images/work.jpg';
    }

    updateImages(exercise1ImagesContainer, imagePath, `Command: ${input}`);
};

const handleSlider = () => {
    const sliderValue = document.getElementById('slider').value;
    const exercise2ImagesContainer = document.getElementById('exercise2-images');
    const imagePath = `images/yoga${sliderValue}.jpg`;

    updateImages(exercise2ImagesContainer, imagePath, `Yoga Image ${sliderValue}`);
};

const updateImages = (container, imagePath, altText) => {
    const imageElement = document.createElement('img');
    imageElement.src = imagePath;
    imageElement.alt = altText;
    const linkElement = document.createElement('a');
    linkElement.href = imagePath;
    linkElement.appendChild(imageElement);
    container.innerHTML = '';
    container.appendChild(linkElement);
};