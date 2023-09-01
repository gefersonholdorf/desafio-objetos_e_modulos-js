const conteudo = document.getElementById("dados").innerHTML.split("\n");
const dados = conteudo.map(x => Number(x));

let mNumber = dados[0];
for (let i = 1; i < dados.length; i++) {
    if (dados[i] > mNumber) {
        mNumber = dados[i];
    }
}
console.log(`Maior número será: ${mNumber.toFixed(2)}`);