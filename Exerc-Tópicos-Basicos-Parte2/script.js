const dados = [
    {
    nome: "Maria Silva",
    valorHora: 80.0,
    horasTrabalhadas: 20,
    terceirizado: true,
    },
    {
    nome: "João Rocha",
    valorHora: 60.0,
    horasTrabalhadas: 25,
    terceirizado: false,
    },
    {
    nome: "Tiago James",
    valorHora: 80.0,
    horasTrabalhadas: 10,
    terceirizado: true,
    },
    {
    nome: "Ana Carla",
    valorHora: 70.0,
    horasTrabalhadas: 40,
    terceirizado: true,
    },
    {
    nome: "Pedro Paulo",
    valorHora: 50.0,
    horasTrabalhadas: 25,
    terceirizado: false,
    },
];

function funcionariosTerceirizados(dados) {
    return dados.filter(x => x.terceirizado == true);
}

function multiplicacao(x, y) {
    return x * y;
}

function custoTotal(lista) {
    return lista.map(x => x.valorHora * x.horasTrabalhadas).reduce((x, y) => x + y, 0)
}

const terceirizados = funcionariosTerceirizados(dados)

const custoTerceirizados = custoTotal(terceirizados);

console.log(`Custo total dos funcionários terceirizados: R$ ${custoTerceirizados}`)