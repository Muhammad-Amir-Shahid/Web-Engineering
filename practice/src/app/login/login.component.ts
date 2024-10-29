import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormatStringPipe } from '../format-string.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, FormatStringPipe, CommonModule],
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Mock login function (replace with real authentication service)
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      console.log('Login successful with:', { email, password });
      // return;
      // Redirect to dashboard or display a success message here
    } else {
      console.log('Invalid form submission');
    }
  }

  // Getter methods for form controls (to use in the template for validation)
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
