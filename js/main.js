const butn = document.getElementById("btn");
const color = document.querySelector(".color")
const hex = [
    "0",
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9", 
    "A", 
    "B", 
    "C", 
    "D", 
    "E", 
    "F",
];
let t;

t = setTimeout (changeColorForTime, 2000); // Меняеет каждые 2 секунды

butn.addEventListener("click", changeColor); // Изменение цвета по кнопке

//Изменить цвет
function changeColor(){ 
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor; // цвет фона body 
    color.textContent = hexColor; // текст кнопки
}


function changeColorForTime(){
    changeColor();
    setTimeout(changeColorForTime, 2000);
}

function generateHex() {
    let hexColor ="#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[random()];
    }

    return hexColor;
}

function random () {
    let rand = Math.random() * hex.length;
    return Math.floor(rand);
  }

