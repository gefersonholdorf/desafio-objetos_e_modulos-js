import order from './domain/order.js';
import * as orderService from './services/order-service.js';

const dados = document.getElementById("dados").innerHTML.split("\n");

const entity = new order(dados[0], Number(dados[1]), Number(dados[2]));

const total = orderService.total(entity);

console.log(entity)

console.log(`Pedido código ${entity.code}`)
console.log(`Valor total: R$ ${total.toFixed(2)}`)