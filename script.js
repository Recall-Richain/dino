
const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');

let isJumping = false;
let gravity = 0.9;
let position = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === " " && !isJumping) {
        isJumping = true;
        jump();
    }
});

function jump() {
    let count = 0;
    let timerId = setInterval(function () {
        if (count === 15) {
            clearInterval(timerId);
            let downTimerId = setInterval(function () {
                if (count === 0) {
                    clearInterval(downTimerId);
                    isJumping = false;
                }
                position -= 5;
                count--;
                position = position * gravity;
                dino.style.bottom = position + 'px';
            }, 20);
        }
        position += 30;
        count++;
        position = position * gravity;
        dino.style.bottom = position + 'px';
    }, 20);
}

function moveObstacle() {
    let obstaclePosition = 600;
    let timerId = setInterval(function () {
        if (obstaclePosition < -20) {
            clearInterval(timerId);
        } else {
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + 'px';
        }
    }, 20);
}

moveObstacle();