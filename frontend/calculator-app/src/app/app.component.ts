import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';  // Ensure this import

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Only for standalone components, remove if you're using regular module structure
  imports: [CalculatorComponent],  // Add CalculatorComponent to imports
})
export class AppComponent {
  title = 'frontend';
}
