//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function calculateAverageNumElements(array) {
    const numElements = array.filter(element => typeof element === 'number');
    
    const sum = numElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const average = sum / numElements.length;
    
    return average;
}

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = 'Невідомий знак операції';
    }
    return result;
}



//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fillArrayByUser() {
    const outerLength = parseInt(prompt("Введіть довжину основного масиву:"));
    const innerLength = parseInt(prompt("Введіть довжину внутрішніх масивів:"));
    
    const array = [];
    
    for (let i = 0; i < outerLength; i++) {
        const innerArray = [];
        for (let j = 0; j < innerLength; j++) {
            const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
            innerArray.push(value);
        }
        array.push(innerArray);
    }
    
    return array;
}


//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 

function removeCharacters(str, charsToRemove) {
    const regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    return str.replace(regex, '');
}

//

const array = [1, 'a', 2, 'b', 3, 'c', 4];
console.log("Середнє арифметичне числових елементів масиву:", calculateAverageNumElements(array));

const x = parseFloat(prompt("Введіть перше число:"));
const znak = prompt("Введіть знак операції (+, -, *, /, %, ^):");
const y = parseFloat(prompt("Введіть друге число:"));
console.log(`Результат операції ${x} ${znak} ${y} = ${doMath(x, znak, y)}`);

const twoDimensionalArray = fillArrayByUser();
console.log("Двомірний масив, заповнений користувачем:", twoDimensionalArray);

const str = prompt("Введіть рядок:");
const charsToRemove = prompt("Введіть символи для видалення (без пробілів, наприклад, ld):").split('');
console.log("Результат видалення символів з рядка:", removeCharacters(str, charsToRemove));
