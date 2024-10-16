import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Forget password request submitted', form.value);
      console.log('Email:', this.email);
    } else {
      console.log('Form is invalid');
    }
  }
}
