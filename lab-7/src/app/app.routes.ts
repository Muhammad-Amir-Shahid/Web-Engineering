import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LowercaseEmailPipe } from './lowercase-email.pipe';

export const routes: Routes = [
 // { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
 // { path: 'about', component: AboutComponent },
  // other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,CommonModule, LowercaseEmailPipe],
  exports: [RouterModule]

})
export class AppRoutingModule {}
