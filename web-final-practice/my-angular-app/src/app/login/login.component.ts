import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // To store the username entered by the user
  password: string = ''; // To store the password entered by the user
  message: string = ''; // To display success or error messages

  constructor(private authService: AuthService) {}

  // Function triggered on Login button click
  onLogin() {
    if (!this.username || !this.password) {
      this.message = 'Please enter both username and password!';
      return;
    }

    // Call the AuthService login method and handle response
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        this.message = 'Login Successful!'; // Display success message
      },
      error: (err) => {
        console.error('Login Failed:', err);
        this.message = 'Login Failed: ' + (err.error.message || 'Server Error');
      },
    });
  }
}
