import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationForm: FormGroup;
  registrationSuccess = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
    });
  }

  get name() {
    return this.registrationForm.get('name');
  }
  get age() {
    return this.registrationForm.get('age');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get course() {
    return this.registrationForm.get('course');
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationSuccess = true;
    }
  }
}
