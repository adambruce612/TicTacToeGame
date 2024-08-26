const topLeft = document.getElementById("top-left");
const topCenter = document.getElementById("top-center");
const topRight = document.getElementById("top-right");
const middleLeft = document.getElementById("middle-left");
const middleCenter = document.getElementById("middle-center");
const middleRight = document.getElementById("middle-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomCenter = document.getElementById("bottom-center");
const bottomRight = document.getElementById("bottom-right");

let topLeftDisabled = false, topCenterDisabled, topRightDisabled, middleLeftDisabled, middleCenterDisabled, middleRightDisabled, bottomLeftDisabled, bottomCenterDisabled, bottomRightDisabled = false;

function isValid(topLeft) {
    if (!topLeft.disabled) {
        chooseSquare();
    } else {
        alert("This square is already taken. Please choose again.");
    }
}

function chooseSquare(square) {
    this.disabled = true;
    console.log(`${this} - ${this.disabled}`);
}



topLeft.addEventListener('click', isValid(topLeft));

