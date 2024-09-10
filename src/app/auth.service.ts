import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/login'; // Replace with your login API URL
  private signUpUrl = 'http://localhost:8080/register'; // Replace with your signup API URL

  constructor(private http: HttpClient) { }

  logIn(user: any): Observable<any> {
    return this.http.post(this.loginUrl, user);
  }

  signUp(user: any): Observable<any> {
    return this.http.post(this.signUpUrl, user);
  }
}
