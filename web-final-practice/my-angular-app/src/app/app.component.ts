import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent], // Add LoginComponent here
  template: '<app-login></app-login>', // Use the LoginComponent selector
  styleUrls: ['./app.component.css']
})
export class AppComponent {}


