'use strict';
let number;
function notNumber() {
    return !isNaN(parseFloat(number));
}
function mainQuestion() {
    number = prompt('Угадай число от 1 до 100');
    function verification(x) {
        if (number > 100 || number < 1) {
            mainQuestion();
        } else if(!notNumber()) {
            console.log(number);
            alert('Введи число!');
            mainQuestion();
        } else if (number > x) {
            alert('Загаданное число меньше');
            mainQuestion();
        } else if (number < x) {
            alert('Загаданное число больше');
            mainQuestion();
        } 
    }
    if (number === null) {
        alert('Игра закончена, даже не начавшись');
    } else {
        verification(23);
    }
}
mainQuestion();
