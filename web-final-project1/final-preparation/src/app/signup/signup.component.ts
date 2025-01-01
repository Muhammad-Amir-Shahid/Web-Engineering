import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import for *ngIf

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [ReactiveFormsModule, CommonModule], // Add required modules
})
export class SignupComponent {
  // Define the signup form
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  // Handle form submission
  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup Form Data:', this.signupForm.value);
      alert('Signup successful!');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
