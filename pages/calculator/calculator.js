
function pressButton(buttonValue) {
    let calText = document.querySelector(".input-screen").value + buttonValue + "";
    document.querySelector(".input-screen").value = calText;
}

function calculate() {
    let calText = document.querySelector(".input-screen").value;
    document.querySelector(".input-screen").value = eval(calText);
}

function clearScreen() {
    document.querySelector(".input-screen").value = "";
}

function backBtn() {
    let back = document.querySelector(".input-screen").value;
    document.querySelector(".input-screen").value = back.substring(0, back.length - 1);
}

function on() {

}

function off() {
    document.querySelector("input").disabled;
}