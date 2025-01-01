import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, SignupComponent],
  template: `
    <h1>Welcome to Our App!</h1>
    <div>
      <app-login></app-login>
      <hr />
      <app-signup></app-signup>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'final-preparation'; // Define the title property here
}
