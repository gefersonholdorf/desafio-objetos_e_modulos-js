import Employee from './domain/employee.js';
import * as salaryService from './services/salary-service.js';

const dados = document.getElementById("dados").innerHTML.split("\n");

const employee = new Employee(dados[0], Number(dados[1]));

const netSalary = salaryService.netSalary(employee);

console.log(`Funcionário = ${employee.name}`)
console.log(`Salário bruto = ${employee.grossSalary.toFixed(2)}`)
console.log(`Salário líquido = ${netSalary.toFixed(2)}`)