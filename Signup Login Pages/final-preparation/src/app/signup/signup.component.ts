import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule], // Removed FormsModule entirely
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private apiService: ApiService) {}

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      this.apiService.signup(formData).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          alert('Signup successful!');
        },
        (error) => {
          console.error('Signup failed:', error);
          alert('Signup failed! Please try again.');
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
