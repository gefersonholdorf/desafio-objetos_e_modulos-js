const conteudo = document.getElementById("dados").innerHTML;
const dados = conteudo.split("\n").map(x => Number(x));

dados[0] *= 2;
dados[1] *= 3;
dados[2] *= 5;

let somaDados = dados[0];
for (let i = 1; i < dados.length; i++) {
    somaDados += dados[i];
} 

const pesos = [2, 3, 5];
somaPesos = pesos[0];
for (let i = 1; i < pesos.length; i++) {
    somaPesos += pesos[i];
} 

const mediaPonderada = somaDados / somaPesos;
console.log(`Média Ponderada: ${mediaPonderada.toFixed(2)}`);