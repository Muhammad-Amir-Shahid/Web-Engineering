import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle login logic here, such as sending the data to the backend
      console.log('Login successful', form.value);
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    } else {
      // Handle invalid form submission case
      console.log('Form is invalid');
    }
  }
}
