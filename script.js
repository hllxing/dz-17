// let arr = [10, 4, 'f', 6, 'b', 8, 'x'];
// let newArr = [];
// let sum = 0;
// let result = 0;
//
// function average(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (isNaN(arr[i]) === false){
//             newArr.push(arr[i]);
//         }
//     }
//         sum = newArr.reduce((a,b)=>a+b);
//         result = sum / newArr.length;
//         return result;
//
// }
// console.log(average(arr)); ---- #1


// let x = prompt('Введіть перше число:');
// let znak = prompt('Введіть знак:');
// let y = prompt('Введіть друге число:');
//
// if (isNaN(x) === true || isNaN(y) === true){
//     alert('Вводіть тільки числа!!')
// } else {
//     function doMath(x, znak, y) {
//         switch (znak) {
//             case '+':
//                 return Number(x) + Number(y);
//             case '-':
//                 return Number(x) - Number(y);
//             case '*':
//                 return Number(x) * Number(y);
//             case '/':
//                 return Number(x) / Number(y);
//             case '%':
//                 return Number(x) % Number(y);
//             case '^':
//                 return Math.pow(Number(x), Number(y));
//             default:
//                 return 'Перевірте правильність введення знака!';
//         }
//     }
//     alert(doMath(x, znak, y));
// } ---- #2


// let arr = [];
// function fillArray(rows, cols) {
//     for(let i = 0; i < rows; i++) {
//         let newArr = [];
//         for(let j = 0; j < cols; j++) {
//             let value = prompt(`Введіть значення для елемента (${i},${j}):`);
//             newArr.push(value);
//         }
//         arr.push(newArr);
//     }
//     return arr;
// }
// console.log(fillArray(2, 2)); ---- #3


// let result = '';
// function deleteChars(string, chars) {
//     for (let i = 0; i < string.length; i++){
//         if (!chars.includes(string[i])){
//             result += string[i];
//         }
//     }
//     return result;
// }
// console.log(deleteChars("hello world", ['l', 'd'])); ---- #4



