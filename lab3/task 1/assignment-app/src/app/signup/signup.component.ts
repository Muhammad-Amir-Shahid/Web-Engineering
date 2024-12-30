import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add FormsModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit(form: any) {
    console.log('Form Submitted', form);
  }
}
