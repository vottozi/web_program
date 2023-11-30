//HomeWork 1 (Part 1) Gmail checker
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9]+@gmail\.com$/;

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'Right';
        gmailSpan.style.color = 'green';
    } else {
        gmailSpan.innerHTML = 'False';
        gmailSpan.style.color = 'red';
    }
})

//HomeWork 1 (Part 2) Block in block

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

const parentWidth = parentBlock.clientWidth;
const parentHeight = parentBlock.clientHeight;

const childWidth = childBlock.clientWidth;
const childHeight = childBlock.clientHeight;

let posX = 0;
let posY = 0;
let direction = 1; // 1 - вправо, 2 - вниз, 3 - влево, 4 - вверх

function moveSquare() {
    switch (direction) {
        case 1:
            if (posX < parentWidth - childWidth) {
                posX++;
            } else {
                direction = 2;
            }
            break;
        case 2:
            if (posY < parentHeight - childHeight) {
                posY++;
            } else {
                direction = 3;
            }
            break;
        case 3:
            if (posX > 0) {
                posX--;
            } else {
                direction = 4;
            }
            break;
        case 4:
            if (posY > 0) {
                posY--;
            } else {
                direction = 1;
            }
            break;
    }

    childBlock.style.left = posX + "px";
    childBlock.style.top = posY + "px";
    requestAnimationFrame(moveSquare);
}

moveSquare();

// HomeWork 3 Timer

const secondsElement = document.getElementById("secondsS");
const millisecondsElement = document.getElementById("millisecondsS");
let seconds = 0;
let tenths = 0;
let intervalId;

document.getElementById("start").addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            tenths++;
            if (tenths === 10) {
                tenths = 0;
                seconds++;
            }

            secondsElement.textContent = formatTime(seconds);
            millisecondsElement.textContent = `.${tenths}`;
        }, 100);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

const formatTime = time => (time < 10 ? `0${time}` : time);

