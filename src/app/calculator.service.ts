import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  calculate(firstOperand: number, secondOperand: number, operator: string): number {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case 'x':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return 0;
    }
  }
}
