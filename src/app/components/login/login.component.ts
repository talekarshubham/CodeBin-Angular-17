import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 
  constructor(private authService:AuthService) {}
email=new FormControl('',[
  Validators.required,Validators.email
])
password=new FormControl('',[
  Validators.required,Validators.minLength(9)
])
loginForm= new FormGroup({
  email: this.email,
  password:this.password
})
logIn(){
  console.log(this.loginForm.value);
  if (this.loginForm.value.email&&this.loginForm.value.password) {
    this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password)
  }
}
resetForm(){

}
}
