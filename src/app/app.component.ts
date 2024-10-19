import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'calculator-app';
  display = new FormControl('');
  buttons = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
  ];
  operator = '';
  firstOperand: number | null = null;

  constructor(private calculatorService: CalculatorService) {}

  onButtonClick(value: string) {
    if (['+', '-', 'x', '/'].includes(value)) {
      this.operator = value;
      this.firstOperand = parseFloat(this.display.value || '0');
      this.display.setValue('');
    } else if (value === 'DEL') {
      this.display.setValue(
        this.display.value ? this.display.value.slice(0, -1) : '0'
      );
    } else {
      this.display.setValue(this.display.value + value);
    }
  }

  calculate() {
    const secondOperand = parseFloat(this.display.value || '0');
    if (this.firstOperand !== null && this.operator) {
      const result = this.calculatorService.calculate(
        this.firstOperand,
        secondOperand,
        this.operator
      );
      this.display.setValue(result.toString());
      this.firstOperand = null;
      this.operator = '';
    }
  }

  reset() {
    this.display.setValue('');
    this.firstOperand = null;
    this.operator = '';
  }
}
