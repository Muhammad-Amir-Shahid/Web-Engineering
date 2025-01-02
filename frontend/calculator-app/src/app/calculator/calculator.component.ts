import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  imports:[FormsModule, CommonModule],
  standalone: true
})
export class CalculatorComponent {
  currentInput: string = '';  // Holds the current input value
  lastCalculationTime: Date = new Date();
  result: number = 0;

  // Append the clicked button's value to the current input
  appendToInput(value: string) {
    console.log('Button clicked:', value);  // Log the value when a button is clicked
    this.currentInput += value;  // Append the clicked value to the current input
  }

  // Clear the current input when the 'C' button is clicked
  clearInput() {
    console.log('Clear clicked');
    this.currentInput = '';  // Reset the current input to empty
  }

  // Evaluate the mathematical expression when '=' is clicked
  calculateResult() {
    console.log('Calculating result...');
    try {
      this.result = eval(this.currentInput);
      this.currentInput = this.result.toString();
      this.lastCalculationTime = new Date();
    } catch (error) {
      this.currentInput = 'Error';
    }
  }
}
