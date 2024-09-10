import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:User=new User();


 // credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  logIn() {
    console.log(this.user.username);
    console.log(this.user.password);


    this.authService.logIn(this.user).subscribe(

      (response) => {
        console.log(response)
        // Handle successful login
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/employees']);
      },
      (error) => {
        console.log(error)
        // Handle login failure
        //alert('Login failed: ' + error.message);
      }
    );
  }



}
