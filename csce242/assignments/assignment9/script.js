const ball = document.querySelector('.ball');
const startButton = document.getElementById('startButton');

let isBouncing = false;
let bounceInterval;
let currentPosition = 0;
let direction = 1; 
const columnHeight = 300;

const bounceBall = () => {
    bounceInterval = setInterval(() => {
        currentPosition += 5 * direction;

        if (currentPosition >= columnHeight || currentPosition <= 0) {
            direction *= -1; 
        }

        ball.style.top = currentPosition + 'px';
    }, 50);
};

const stopBounce = () => {
    clearInterval(bounceInterval);
    isBouncing = false;
    startButton.innerText = 'Start';
};

startButton.addEventListener('click', () => {
    if (isBouncing) {
        stopBounce();
    } else {
        isBouncing = true;
        startButton.innerText = 'Stop';
        bounceBall();
    }
});

const yogaButtons = document.querySelectorAll('.yoga-container button');

const displayPoseMessage = (event) => {
    const poseId = event.target.id;
    const message = document.createElement('p');
    message.innerText = poseId;
    event.target.parentNode.appendChild(message);
};

for (const button of yogaButtons) {
    button.addEventListener('click', displayPoseMessage);
}