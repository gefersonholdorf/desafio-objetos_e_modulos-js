const conteudo = document.getElementById("dados").innerHTML;
const dados = conteudo.split("\n").map(x => Number(x));

const dentro = [];
const fora = [];
for (let i = 0; i < dados.length; i++) {
    if (dados[i] >= 10 && dados[i] <= 20) {
        dentro.unshift(dados[i]);
    } else {
        fora.unshift(dados[i]);
    }
}

console.log(`${dentro.length} DENTRO`);
console.log(`${fora.length} FORA`);