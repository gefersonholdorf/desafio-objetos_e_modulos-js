/*
console.log("String em aspas duplas");
console.log('String em aspas simples');
console.log(`String em crases`);

console.log("Concatenação e interpolação");

const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");
const str1 = num.toString();
console.log(`Tipo de ${str1} é ${typeof str1}`);

const str2 = num.toFixed(2);
console.log(`Tipo de ${str2} é ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1} é ${typeof num1}`);

const num2 = parseInt("21", 10);
console.log(`Tipo de ${num2} é ${typeof num2}`);

const num3 = parseInt("21", 16);
console.log(`Tipo de ${num3} é ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4} é ${typeof num4}`);
*/

const str = "Maria Silva  ";

console.log(`const str = "Maria Silva  "`);

console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toLowerCase: ${str.toUpperCase()}`);

console.log(`charAt: ${str.charAt(3)}`);

console.log(`replace: ${str.replace("i", "$")}`);
console.log(`replace: ${str.replace(/i/g, "$")}`);

console.log(`length: ${str.length}`);

console.log(`indexOf: ${str.indexOf("i")}`);
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);

console.log(`subSting: ${str.substring(3, 8)}`);

const data = "14/10/2021";
const mes = Number(data.substring(3, 5));
console.log(mes);

const valor = "200.99";
const novoValor = valor.toString().replace(".", ",");
console.log(novoValor);

console.log(`subSting: ${str.trim()}`);


