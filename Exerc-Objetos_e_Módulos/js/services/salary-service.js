import * as taxService from './tax-service.js';
import * as pensionService from './pension-service.js';
import Employee from '../domain/employee.js';

export function netSalary(employee) {

    const tax = taxService.tax(employee.grossSalary);
    const pension = pensionService.discount(employee.grossSalary);
    return employee.grossSalary - pension - tax;
}