import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  user:User=new User();
 // userDetails = { username: '', password: '', email: '' };

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    console.log(this.user.username+"this is username");
    console.log(this.user.password+"this is password");
    this.authService.signUp(this.user).subscribe(
      (response) => {
        // Handle successful signup
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle signup failure
        alert('Signup failed: ' + error.message);
      }
    );
  }

}
